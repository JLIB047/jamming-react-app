import React from 'react'; 
import TrackList from '../TrackList/TrackList'; 


const Playlist = (props) => {
    //console.log(props.playlistTracks); 
    const handleNameChange = ({target}) => {
        props.onNameChange(target.value)
    }; 

    return(
        <div className="Playlist">
            <input type='text' placeholder='New Playlist' defaultValue='New Playlist'
                onChange={handleNameChange}
                />
            {/* Add tracklist component */}
            <TrackList 
                userSearchResults={props.playlistTracks}
                onRemove={props.onRemove}
                isRemoval={true}/> 
            <button className = 'Playlist-save' onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
        
    )
}

export default Playlist; 