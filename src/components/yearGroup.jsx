import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Playlist from './Playlist.jsx';
import { useState } from 'react';
import PlaylistData from './playlist.json';

const YearGroup = (props) => {

  // Component used to render a single Year Group

  //States that deal with props
  const [playlistSet,setPlaylistSet] = useState(props.playlistSet);
  const [yearGroupName,setYearGroupName] = useState(props.yearGroupName);
  // console.log(playlistSet);

  //States that deal with imported JSON
  const [playlist,setPlaylist] = useState(PlaylistData);
  const [categoryTitles,setCategoryTitles] = useState(null)
  
  // console.log(playlist);

  //match playlistSet from props with playlist from JSON
playlistSet.forEach( element => { 
  if (element.playlist_name === playlist.playlist_name){
    //
  } 
});

  return (
    <>
      <Paper elevation={2} pb={5}>
        <Typography variant='h5' py={2} px={2}textAlign='left'>{yearGroupName}</Typography>
        {
          playlistSet.map(
            element => {
              const playlistName = element.playlist_name;
              const playlistCategoriesData = playlist.playlistcategory_set
              return <Playlist playlistName={playlistName} playlistCategoriesData = {playlistCategoriesData}/>
              
            }
          )
        }
      </Paper>
    </>
  )
}



export default YearGroup
