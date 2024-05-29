import React from 'react'; 
import Track from '../Track/Track'; 

const TrackList = (props) => {
    //console.log(props); 
    return (
        <div className='TrackList' >
            {props.userSearchResults.map((track) => (
                <Track 
                    track={track} 
                    key={track.id}
                    isRemoval={props.isRemoval}
                    onAdd={props.onAdd}
                    onRemove={props.onRemove}/>
            ))}
        </div>
    );
}

export default TrackList; 