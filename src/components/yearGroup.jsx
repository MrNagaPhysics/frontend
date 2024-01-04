import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Playlist from './Playlist.jsx';
import { useState } from 'react';
import PlaylistData from './playlist.json';

const YearGroup = (props) => {

<<<<<<< HEAD
const YearGroup = ({ yearGroupName, playlists }) => {
  // Component used to render a single Year Group section on homepage
=======
  // Component used to render a single Year Group

  //States that deal with props
  const [playlistSet,setPlaylistSet] = useState(props.playlistSet);
  const [yearGroupName,setYearGroupName] = useState(props.yearGroupName);
  // console.log(playlistSet);

  //States that deal with imported JSON
  const [playlist,setPlaylist] = useState(PlaylistData);
  var PlCatData = [];
  
console.log(playlist)
  //match playlistSet from props with playlist from JSON


>>>>>>> origin/main
  return (
    <>
      <Paper elevation={2} pb={5}>
        <Typography variant='h5' py={2} px={2}textAlign='left'>{yearGroupName}</Typography>
        {
<<<<<<< HEAD
          playlists.map(
            playlist => {
              const playlistName = playlist["playlist_name"]
              const playlistCategories = playlist["playlist_categories"]
              const id = playlist['id']
              
              return <Playlist key={id} playlistName={playlistName} playlistCategories={playlistCategories}/>
              
=======
          playlistSet.map(
            element => {
              const playlistName = element.playlist_name;
              var playlistCategoriesData = [];
              if (playlistName === playlist.playlist_name){
                playlistCategoriesData = playlist.playlistcategory_set
              } else {
                playlistCategoriesData = [];
              }
              return <Playlist playlistName={playlistName} playlistCategoriesData = {playlistCategoriesData}/>
>>>>>>> origin/main
            }
          )
        }
      </Paper>
    </>
  )
}



export default YearGroup
