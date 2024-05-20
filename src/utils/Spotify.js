import React, { useEffect, useState } from 'react';  
import axios from 'axios';


const Spotify = () => { 
    const clientId = 'a720b7f865ed4c1e8b9659cffab3d866';
    const redirectUri = 'http://localhost:3000'; 
    const authEndpoint = "https://accounts.spotify.com/authorize";
    const response = 'token'; 

    const [ token, setToken ] = useState(""); 
    const [ searchKey, setSearchKey ] = useState(""); 
    const [ artists, setArtists ] = useState([]); 

    useEffect(() => {
        const hash = window.location.hash 
        let token = window.localStorage.getItem("token")

        if(!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            console.log(token); 
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setToken(token) 
    }, []); 

    const logOut = () => {
        setToken("");
        window.localStorage.removeItem("token"); 
    }; 

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            }, 
            params: {
                q: searchKey, 
                type: "artist"
            }
        })
        setArtists(data.artists.items); 
    }; 

    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"60%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }



    return (
        <>
        <h1>Jammin': Spotify API</h1>
        <div className='auth'>
        {!token ? 
            <a href= {`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${response}`}>Login to Spotify</a>
            : <button onClick={logOut}>Logout</button>
        }
        </div>
        <div className='searchBar'>
            <form onSubmit={searchArtists}>
            <input type='text' placeholder='Search Artist..' onChange={e => setSearchKey(e.target.value)}></input>
                    <button type='submit'className="SearchButton">
                       Search
                    </button>
            </form>

        </div>
        <div className="renderArtist">
            {renderArtists()}
        </div>
        </>
    )
}; 

export default Spotify; 