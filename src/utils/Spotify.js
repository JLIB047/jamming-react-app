import React, { useEffect, useState } from 'react';  


const Spotify = () => { 
    const clientId = 'a720b7f865ed4c1e8b9659cffab3d866';
    const redirectUri = 'http://localhost:3000'; 
    const authEndpoint = "https://accounts.spotify.com/authorize";
    const response = 'token'; 

    const [ token, setToken ] = useState(""); 

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


    return (
        <>
        <div className='auth'>
        {!token ? 
            <a href= {`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${response}`}>Login to Spotify</a>
            : <button onClick={logOut}>Logout</button>
        }
        </div>
        </>
    )
}; 

export default Spotify; 