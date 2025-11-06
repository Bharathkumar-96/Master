import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Navigate } from 'react-router-dom';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'black',
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'yellow' }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              We are passionate about bringing you the finest selection of jewelry.
              Our commitment to quality and customer satisfaction has made us a trusted name in the industry.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" sx={{ color: 'white' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white' }}>
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'yellow' }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="/privacypolicy" color="inherit" underline="hover" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
              <Link href="/terms" color="inherit" underline="hover">Terms & Conditions</Link>
            </Stack>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'yellow' }}>
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnIcon sx={{ color: 'yellow' }} />
                <Typography variant="body2">
                  123 Jewelry Street, Gem City, 12345
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon sx={{ color: 'yellow' }} />
                <Typography variant="body2">
                  +1 (555) 123-4567
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon sx={{ color: 'yellow' }} />
                <Typography variant="body2">
                  info@jewelrystore.com
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" align="center" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            © {new Date().getFullYear()} Jewelry Store. All rights reserved.
            <br />
            Made with passion for beautiful jewelry.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}