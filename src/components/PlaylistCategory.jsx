import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import ClassIcon from '@mui/icons-material/Class';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import { blue } from '@mui/material/colors';
import StarBorder from '@mui/icons-material/StarBorder';
import ListItemIcon from '@mui/material/ListItemIcon';

const PlaylistCategory = ({ yearGroupNameSlug, playlistCategoryName, playlistNameSlug, playlistCategoryNameSlug, videoRange, videos }) => {
  if (!videoRange) {
    videoRange = "Not Provided"
  }
  return (
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 4 }} href={`/${yearGroupNameSlug}/${playlistNameSlug}/${playlistCategoryNameSlug}`}>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary={`${videoRange} - ${playlistCategoryName}`} />
      </ListItemButton>
    </List>
  )
}


export default PlaylistCategory