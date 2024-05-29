import React from 'react'; 
import TrackList from '../TrackList/TrackList'; 


const SearchResults = (props) => {

    return (
        <div className='Search-Results'>
            <h2>Results</h2>
            {/*Add TrackList components */}
            <TrackList 
                userSearchResults={props.userSearchResults}
                isRemoval={false}
                onAdd={props.onAdd}/>
        </div>

    );
}

export default SearchResults; 