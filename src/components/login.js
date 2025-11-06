import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Typography,
  Alert
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { loginStart, loginSuccess, loginFailure, selectAuth } from '../redux/features/authSlice';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(selectAuth);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'remember' ? checked : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(loginStart());
    // Static credentials
    const staticEmail = 'demo@jewel.com';
    const staticPassword = 'demo123';
    if (
      formData.email.trim().toLowerCase() === staticEmail &&
      formData.password === staticPassword
    ) {
      const mockUserData = {
        id: 1,
        email: staticEmail,
        name: 'Demo User'
      };
      dispatch(loginSuccess(mockUserData));
      navigate('/dashboard');
    } else {
      dispatch(loginFailure('Invalid login credentials. Please try again.'));
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        p: 2
      }}
    >
      <CssBaseline />

      <Paper elevation={8} sx={{ maxWidth: 420, width: '100%', p: { xs: 3, sm: 6 }, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 1,
              textAlign: 'center',
              fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2rem' }
            }}
          >
            Sign in
          </Typography>

          {auth.error && (
            <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
              {auth.error}
            </Alert>
          )}

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              disabled={auth.loading}
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              disabled={auth.loading}
              size="small"
            />
            <FormControlLabel
              control={
                <Checkbox 
                  name="remember" 
                  color="primary" 
                  checked={formData.remember}
                  onChange={handleChange}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1, py: 1.1, fontSize: { xs: '0.95rem', sm: '1rem' } }}
              disabled={auth.loading}
            >
              {auth.loading ? 'Signing in...' : 'Sign In'}
            </Button>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Link href="#" variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                Forgot password?
              </Link>
              <Link href="/signup" variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
        