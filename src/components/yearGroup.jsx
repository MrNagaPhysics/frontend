import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Playlist from './Playlist.jsx';

const YearGroup = ({ yearGroupName, slug, playlistSet }) => {
  // Component used to render a single Year Group
  return (
    <>
      <Paper elevation={2} pb={5}>
        <Typography variant='h5' py={2} px={2}textAlign='left'>{yearGroupName}</Typography>
        {
          playlistSet.map(
            playlist => {
              const playlistName = playlistSet["playlist_name"]
              const playlistCategoriesData = playlistSet["playlistcategory_set"]
              console.log(playlist)
              return <Playlist playlistName={playlistName} playlistCategoriesData = {playlistCategoriesData}/>
              
            }
          )
        }
      </Paper>
    </>
  )
}



export default YearGroup
