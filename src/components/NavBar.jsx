import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import Link from '@mui/material/Link';


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
        <IconButton
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
          {/* Add more menu options as needed */}
        </Menu>

        {/* User Avatar and Dropdown on the right */}
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            getContentAnchorEl={null} // This is important to prevent the menu from blocking the icon
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Login</MenuItem>
            <MenuItem onClick={handleClose}>Sign Up</MenuItem>
            {/* Add more menu items as needed */}
          </Menu>
        </div>

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;