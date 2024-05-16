import React from 'react'; 
import './searchBar.css'; 

function SearchBar() {
    return (
    <>
        <div class='nav-top'>
            <a class='home' href="#home">Home</a>
            <div class='searchbar'>
                <form>
                    <input type='text' placeholder='Search..'></input>
                    <button type='submit'><i class='fa fa-search'></i></button>
                </form>
            </div>
        </div>
    </>
    )
}; 

export default SearchBar; 