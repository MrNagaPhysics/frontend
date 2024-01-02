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

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ListItemIcon from '@mui/material/ListItemIcon';

export default function PlaylistCatogory() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
            <ClassIcon fontSize='large'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Y12 Key Skills"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
            <EngineeringIcon fontSize='large'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mechanics" />
      </ListItem>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
            <BatteryChargingFullIcon fontSize='large'/>
          </Avatar>
        </ListItemAvatar>
        </ListItemIcon>
        <ListItemText primary="Electricity"/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} href="/topic">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="3.01-3.02 Electricity definitions" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}