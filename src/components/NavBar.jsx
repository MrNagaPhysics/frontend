import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import Link from '@mui/material/Link';
import AccountMenu from './AccountMenu';


const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Material-UI icon for the logo on the left */}
        <IconButton href="/" edge="start" color="inherit" aria-label="menu">
          <SchoolIcon fontSize='large'/>
        </IconButton>

        {/* Logo text (replace with your logo) */}
        <Typography href="/" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link color="inherit" underline='none' href="/">Mr Naga Physics</Link>
        </Typography>

        
        {/* Dropdown menu on the right */}
        <AccountMenu/>
 

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

{/* <IconButton
size="large"
aria-label="more options"
aria-controls="menu-options"
aria-haspopup="true"
onClick={handleMenu}
color="inherit"
>
<MenuIcon/>
</IconButton>
<Menu
id="menu-options"
anchorEl={anchorEl}
anchorOrigin={{
  vertical: 'top',
  horizontal: 'right',
}}
transformOrigin={{
  vertical: 'top',
  horizontal: 'right',
}}
getContentAnchorEl={null}
open={open}
onClose={handleClose}
>
<MenuItem onClick={handleClose}>Option 1</MenuItem>
<MenuItem onClick={handleClose}>Option 2</MenuItem>

</Menu> */}
