import React, { useState } from 'react'; 
// import axios from 'axios'; 
import './searchBar.css'; 
//import Spotify, {token} from '../utils/Spotify'; 


const SearchBar = (props) =>  {
    const [ term, setTerm ] = useState(''); 

    const passTerm = () => {
        props.onSearch(term); 
    }; 

    const handleTermChange = ({target}) => {
        setTerm(target.value); 
    }
    return (
        <div className="SearchBar">
            <input type='text' defaultValue="Enter a Song, Album, or Artist" 
                onChange={handleTermChange}></input>
            <button className="SearchButton"
                onClick={passTerm}>Search</button>
        </div>
    )

}

export default SearchBar; 