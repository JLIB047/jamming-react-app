import React, { useState } from 'react';  
import GetToken from './auth'; 
import axios from 'axios';


const Spotify = (props) => {  
    const [ searchKey, setSearchKey ] = useState(""); 
    const [ artists, setArtists ] = useState([]); 


    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${props.token}`
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
        <GetToken />
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