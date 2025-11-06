import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, AppBar, Toolbar, Container, CardActionArea } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const categories = [
  {
    name: 'Rings',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    description: 'Elegant rings for every occasion.'
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    description: 'Beautiful necklaces to complement your style.'
  },
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Stunning earrings for every look.'
  },
  {
    name: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description: 'Chic bracelets for your wrist.'
  },
  {
    name: 'Watches',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80',
    description: 'Luxury watches for timeless elegance.'
  }
];

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jewellery Dashboard
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Categories
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {categories.map((cat) => (
            <Grid item key={cat.name} xs={6} sm={4} md={3} lg={2}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 2 }}>
                <CardActionArea component={RouterLink} to={`/category/${encodeURIComponent(cat.name.toLowerCase())}`}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={cat.image}
                    alt={cat.name}
                  />
                  <CardContent sx={{ p: 1.5 }}>
                    <Typography gutterBottom variant="subtitle1" component="div">
                      {cat.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {cat.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
