import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, IconButton, Stack, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function Favorites() {
  // This would typically come from a global state or localStorage
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          My Favorites
        </Typography>
        {favorites.length === 0 ? (
          <Typography variant="body1" align="center" color="text.secondary">
            No favorites added yet.
          </Typography>
        ) : (
          <Grid container spacing={2} justifyContent="center">
            {favorites.map((item, idx) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={idx}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 180,
                    width: 150,
                    mx: 'auto',
                    boxShadow: 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="120"
                    image={item.url}
                    alt={item.description}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 1, pb: '8px !important' }}>
                    <Typography variant="caption" gutterBottom sx={{ display: 'block' }} noWrap>
                      {item.description}
                    </Typography>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Tooltip title="Likes">
                        <IconButton size="small" sx={{ p: 0.5 }}>
                          <ThumbUpIcon sx={{ fontSize: '1rem' }} />
                        </IconButton>
                      </Tooltip>
                      <Typography variant="caption">{item.likeCount || 0}</Typography>
                      <Tooltip title="Favorited">
                        <IconButton color="secondary" size="small" sx={{ p: 0.5 }}>
                          <FavoriteIcon sx={{ fontSize: '1rem' }} />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}