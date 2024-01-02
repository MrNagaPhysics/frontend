import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import { blue } from '@mui/material/colors';
import { useState, useEffect } from "react";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon';
import PlaylistCategory from './PlaylistCatogory';

const Playlist = ({ playlistName, playlistCategoriesData }) => {
  // State to control w
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open)
  }
  console.log(playlistCategoriesData)

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
          playlistCategoriesData.map(
            playlistCategoryData => {
              const categoryTitle = playlistCategoryData['category_title']
              const videoRange = playlistCategoryData['video_range']
              const slug = playlistCategoryData['slug']
              return <PlaylistCategory categoryTitle={categoryTitle} videoRange={videoRange} slug={slug}/>
           }

          )
        }
  
        
      </Collapse>
      
    </List>
  )

}

export default Playlist



