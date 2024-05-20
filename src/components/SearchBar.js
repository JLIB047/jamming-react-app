import React, { useState } from 'react'; 
import axios from 'axios'; 
import './searchBar.css'; 
import Spotify, {token} from '../utils/Spotify'; 


const SearchBar = () =>  {
    const [ searchKey, setSearchKey ] = useState(""); 
    const [ artists, setArtists ] = useState([]); 

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/artists", {
            headers: {
                Authorization: `Bearer: ${token}`
            }, 
            params: {
                q: searchKey, 
                type: "artist"
            }
        })
        setArtists(data.artists.items); 
        console.log(setArtists(data.artists.items))
    }

    return (
    <>
        <div className='nav-top'>
            <a className='home' href="#home">Home</a>
            <Spotify/> 
            <div className='searchbar'>
                <form onSubmit={searchArtists}>
                    <input type='text' placeholder='Enter a song title..' onChange={e => setSearchKey(e.target.value)}></input>
                    <button type='submit'className="SearchButton">
                        <i className='fa fa-search'></i>
                    </button>
                </form>
            </div>
        </div>
    </>
    )
}; 

export default SearchBar; 