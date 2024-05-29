import React from 'react'; 
import TrackList from '../TrackList/TrackList'; 


const Playlist = (props) => {
    //console.log(props.playlistTracks); 
    return(
        <div className="Playlist">
            <input type='text' placeholder='New Playlist' defaultValue='New Playlist'/>
            {/* Add tracklist component */}
            <TrackList 
                userSearchResults={props.playlistTracks}
                onRemove={props.onRemove}
                isRemoval={true}/> 
            <button className = 'Playlist-save'>SAVE TO SPOTIFY</button>
        </div>
        
    )
}

export default Playlist; 