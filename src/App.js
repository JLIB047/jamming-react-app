import React from 'react'; 
import SearchBar from './components/SearchBar';
import SearchResults from './components/Results';
import TrackList from './components/TrackList';
 

function App() {
  return (
    <>
    <SearchBar /> 
    <SearchResults /> 
    <TrackList />
    </>
  );
}

export default App;
