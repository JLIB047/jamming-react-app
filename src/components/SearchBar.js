import React from 'react'; 
import './searchBar.css'; 
import Spotify from '../utils/Spotify'; 


const SearchBar = () =>  {


    return (
    <>
        <div className='nav-top'>
            <a className='home' href="#home">Home</a>
            <Spotify/> 
            <div className='searchbar'>
                <form>
                    <input type='text' placeholder='Enter a song title..'></input>
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