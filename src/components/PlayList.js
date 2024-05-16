import React from 'react'; 

import TrackList from './TrackList'; 

function PlayList() {


    return (
        <div className='PlayList'>
            <input/>
            <TrackList />
            <button className='Playlist-save' onClick=''>
                SAVE TO SPOTIFY
            </button>
        </div>
    )
}; 

export default PlayList; 