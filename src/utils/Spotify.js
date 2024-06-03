let accessToken = ""; 
const clientId = 'a720b7f865ed4c1e8b9659cffab3d866';
const redirectUri = 'http://localhost:3000';    
//const authEndpoint = "https://accounts.spotify.com/authorize";
//const response = 'token'; 


const Spotify = {  
    getAccessToken(){
        //first check for access token
        if (accessToken) {
            return accessToken; 
        }
        const urlAccessToken = window.location.href.match(/access_token=([^&]*)/)
        const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/)

        //second check for access token 
        if(urlAccessToken && urlExpiresIn){
            accessToken = urlAccessToken[1];
            const expires_in = Number(urlExpiresIn); 
            //setting access token to axpire at the value for expiration time 
            window.setTimeout(() => (accessToken = ""), expires_in * 1000); 
            window.history.pushState("Access Token", null, "/"); 
            return accessToken; 
        }

        //third check for the access token is the first and second are both false
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        window.location = redirect;
    },

    search(term) {
        const accessToken = Spotify.getAccessToken(); 
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: 'GET', 
            headers: { Authorization: `Bearer ${accessToken}`}, 
        })
        .then((response) => {
            return response.json(); 
        })
        .then((jsonResponse) => {
            if(!jsonResponse.tracks){
                return []; 
            }
            return jsonResponse.tracks.items.map((t) => ({
                id: t.id, 
                name: t.name, 
                artist: t.artists[0].name, 
                album: t.album.name,
                uri: t.uri,
            }));
        });
    }
    
}; 

export default Spotify; 