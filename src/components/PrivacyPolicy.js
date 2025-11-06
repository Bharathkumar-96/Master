import React from 'react';
import { Box, Container, Paper, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';

export default function PrivacyPolicy() {
  return (
    <Box sx={{ minHeight: '100vh', py: 6, backgroundColor: 'background.default' }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 2 }}>
          <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
            Privacy Policy
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
            Last updated: {new Date().toLocaleDateString()}
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
            1. Introduction
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            We respect your privacy and are committed to protecting your personal data. This privacy
            policy explains how we collect, use, and safeguard information when you visit our website
            and use our services.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" sx={{ fontWeight: 600 }}>2. Information we collect</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Information you provide" secondary="Account details, contact information, and any other data you submit." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Automatically collected information" secondary="Usage data, device information, cookies and similar technologies." />
            </ListItem>
          </List>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>3. How we use your information</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            We use information to provide and improve our services, communicate with you, secure our
            platform, and comply with legal obligations. We only retain data for as long as necessary
            for these purposes.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" sx={{ fontWeight: 600 }}>4. Sharing and disclosure</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            We do not sell your personal information. We may share data with trusted service providers
            who help operate the website, and when required by law.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>5. Your choices</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            You can access, update, or request deletion of your personal data. You may opt out of
            certain communications and control cookies via your browser settings.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" sx={{ fontWeight: 600 }}>6. Security</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            We implement reasonable technical and organizational measures to protect your data.
            However, no method of transmission or storage is 100% secure.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>7. Contact us</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            If you have questions about this policy, please contact us at <strong>info@jewelrystore.com</strong>.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Typography variant="body2" color="text.secondary">Thank you for trusting us. We are committed to keeping your information safe.</Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
