import React, { useState } from 'react'; 
import './App.css'; 
import SearchBar from '../SearchBar/SearchBar'; 
import SearchResults from '../SearchResults/SearchResults'; 
import Playlist from '../Playlist/Playlist'; 
import Spotify from '../../utils/Spotify'; 


const App = () => {
  const [searchResults, setSearchResults] = useState([
    {
      name: "Example Track Name 1",
      artist: "Example Track Artist 1",
      album: "Example Track Album 1",
      id: 1,
    },
    {
      name: "Example Track Name 2",
      artist: "Example Track Artist 2",
      album: "Example Track Album 2",
      id: 2,
    },
  ]);


  const [ playlistName, setPlaylistName ] = useState('Example Playlist Name')
  const [ playlistTracks, setPlaylistTracks ] = useState([     
        {
        name: "Example Playlist Track Name 1",
        artist: "Example Playlist Track Artist 1",
        album: "Example Playlist Track Album 1",
        id: 3
        }, 
        {
          name: "Example playlist Track Name 2",
          artist: "Example playlist Track Artist 2",
          album: "Example playlist Track Album 2",
          id: 4
        },
    
  ]);

  const addTrack = (track) => {
    const foundTrack = playlistTracks.find(
    (playlistTrack) => playlistTrack.id === track.id
    ); 
    const newTrack = playlistTracks.concat(track); 
    if(foundTrack){
      console.log("Track already exists.")
    } else {
      setPlaylistTracks(newTrack); 
    }
  };

  const removeTrack = (track) => {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id); 
    setPlaylistTracks(existingTrack); 
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((track) => track.uri);
    const name = playlistName; 
    Spotify.savePlaylist(name, trackURIs).then(() => {
      updatePlaylistName('New Playlist'); 
      setPlaylistName([]); 
    })
  }; 

  const search = (term) => {
    Spotify.search(term).then((result) => setSearchResults(result));
    console.log(term); 
  }
    
  
  return (
    <>
    <div>
      <h1>
        Jammin' 
      </h1>
      <div className="App">
        {/*Add Search Bar */} 
        <SearchBar onSearch={search}/> 
        
      </div>
      <div className="App-Playlist">
       {/*Add Search Reuslts  */}
       <SearchResults 
          userSearchResults={searchResults}
          onAdd={addTrack}/>
       {/*Add Playlist */}
      <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack} 
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}/> 
      </div>

    </div>
      
    </>
  );

}

export default App;
