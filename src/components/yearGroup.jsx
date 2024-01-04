import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Playlist from './Playlist.jsx';
import { useState } from 'react';
import PlaylistData from './playlist.json';

const YearGroup = ({ yearGroupName, playlists }) => {
  // Component used to render a single Year Group section on homepage
  return (
    <>
      <Paper elevation={2} pb={5}>
        <Typography variant='h5' py={2} px={2}textAlign='left'>{yearGroupName}</Typography>
        {
          playlists.map(
            playlist => {
              const playlistName = playlist["playlist_name"]
              const playlistCategories = playlist["playlist_categories"]
              const id = playlist['id']
              
              return <Playlist key={id} playlistName={playlistName} playlistCategories={playlistCategories}/>
              
            }
          )
        }
      </Paper>
    </>
  )
}



export default YearGroup
