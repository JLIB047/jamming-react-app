import React, { } from 'react'; 
// import axios from 'axios'; 
import './searchBar.css'; 
//import Spotify, {token} from '../utils/Spotify'; 


const SearchBar = () =>  {
    return (
        <div className="SearchBar">
            <input type='text' defaultValue="Enter a Song, Album, or Artist"></input>
            <button className="SearchButton">Search</button>
        </div>
    )

}

export default SearchBar; 