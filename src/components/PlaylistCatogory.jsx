import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ClassIcon from '@mui/icons-material/Class';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import { blue } from '@mui/material/colors';

export default function PlaylistCatogory() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
            <ClassIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Y12 Key Skills"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
            <EngineeringIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mechanics" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
            <BatteryChargingFullIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Electricity"/>
      </ListItem>
    </List>
  );
}