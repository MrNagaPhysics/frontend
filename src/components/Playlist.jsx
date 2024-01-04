import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import { blue } from '@mui/material/colors';
import { useState} from "react";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon';
import PlaylistCategory from './PlaylistCategory';

const Playlist = ({ playlistName, playlistCategories }) => {
  // State to control whether a playlist section should collapse on click or expand. Defaults to being closed.
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
            <BatteryChargingFullIcon fontSize='large'/>
          </Avatar>
        </ListItemAvatar>
        </ListItemIcon>
        <ListItemText primary={playlistName}/>
        
      {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {
          playlistCategories.map(
            playlistCategory => {
              const playlistCategoryName = playlistCategory['category_title']
              const id = playlistCategory['id']
              const videoRange = playlistCategory['video_range']
              const videos = playlistCategory['videos']
              
              return <PlaylistCategory playlistCategoryName={playlistCategoryName} key={id} videoRange={videoRange} videos={videos}/>
           }

          )
        } 
      </Collapse>
      
    </List>
  )

}

export default Playlist



