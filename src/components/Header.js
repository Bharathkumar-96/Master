import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { selectUser, logout } from '../redux/features/authSlice';

export default function HeaderBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(selectUser);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    dispatch(logout());
    navigate('/');
  };

  const handleFavorites = () => {
    handleClose();
    setTimeout(() => {
      navigate('/favorites');
    }, 0);
  };

  const goHome = () => navigate('/dashboard');

  const showHome = location.pathname !== '/dashboard';

  const initials = user && user.name ? user.name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase() : 'GU';

  return (
    <>
      <AppBar position="static" color="inherit" elevation={1} sx={{ bgcolor: 'background.paper', minHeight: 56 }}>
        <Toolbar sx={{ minHeight: 56, px: { xs: 2, sm: 3 } }}>
          {showHome ? (
            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="home" 
              onClick={goHome} 
              sx={{ mr: 1, p: 0.5 }}
              size="small"
            >
              <HomeIcon fontSize="small" />
            </IconButton>
          ) : (
            <Box sx={{ width: 32 }} />
          )}

          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Jewellery Store
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>{user?.name || 'Guest'}</Typography>
            <Avatar sx={{ bgcolor: 'primary.main', width: 28, height: 28, fontSize: '0.875rem' }}>{initials}</Avatar>
            <IconButton
              color="inherit"
              onClick={handleMenu}
              size="small"
              sx={{ ml: 0.5, p: 0.5 }}
            >
              <KeyboardArrowDownIcon fontSize="small" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem 
                onClick={(e) => {
                  e.stopPropagation();
                  handleFavorites();
                }}
              >
                <ListItemIcon>
                  <FavoriteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Favorites</ListItemText>
              </MenuItem>
              <MenuItem 
                onClick={(e) => {
                  e.stopPropagation();
                  handleLogout();
                }}
              >
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
