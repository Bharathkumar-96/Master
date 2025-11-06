import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Card, CardMedia, CardContent, IconButton, Grid, Button, AppBar, Toolbar, Tooltip, Stack, Dialog, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const categoryData = {
  rings: {
    name: 'Rings',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        description: 'A classic gold ring with a brilliant diamond centerpiece.',
        deepDescription: 'This timeless gold ring features a dazzling diamond centerpiece, expertly cut to maximize brilliance. Perfect for engagements, anniversaries, or as a statement of elegance.'
      },
      {
        url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
        description: 'Modern silver ring with intricate design.',
        deepDescription: 'A contemporary silver ring with a unique, intricate pattern. Crafted for those who appreciate modern artistry and fine craftsmanship.'
      },
      {
        url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
        description: 'Elegant gemstone ring for special occasions.',
        deepDescription: 'This elegant ring showcases a vibrant gemstone, set in a delicate band. Ideal for special occasions or as a cherished gift.'
      }
    ]
  },
  necklaces: {
    name: 'Necklaces',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
        description: 'Delicate gold necklace with a heart pendant.'
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        description: 'Statement pearl necklace for elegant evenings.'
      },
      {
        url: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80',
        description: 'Minimalist silver chain for daily wear.'
      }
    ]
  },
  earrings: {
    name: 'Earrings',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        description: 'Classic diamond stud earrings.'
      },
      {
        url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
        description: 'Gold hoop earrings with a modern twist.'
      },
      {
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        description: 'Elegant drop earrings with gemstones.'
      }
    ]
  },
  bracelets: {
    name: 'Bracelets',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
        description: 'Stackable gold bracelets for a trendy look.'
      },
      {
        url: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80',
        description: 'Elegant silver bangle with minimal design.'
      },
      {
        url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
        description: 'Gemstone bracelet for a pop of color.'
      }
    ]
  },
  watches: {
    name: 'Watches',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80',
        description: 'Luxury gold watch with a classic dial.'
      },
      {
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        description: 'Modern silver watch for everyday use.'
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        description: 'Elegant watch with leather strap.'
      }
    ]
  }
};

export default function CategoryDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const categoryKey = name?.toLowerCase();
  const category = useMemo(() => categoryData[categoryKey], [categoryKey]);

  // Track like/favorite state for each image
  const [imageStates, setImageStates] = useState(() =>
    category && category.images
      ? category.images.map(() => ({ liked: false, favorited: false, likeCount: 0 }))
      : []
  );

  // Dialog state
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogIndex, setDialogIndex] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if (!category) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" color="error">
          Category not found
        </Typography>
        <Box textAlign="center" mt={2}>
          <Button variant="contained" onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
        </Box>
      </Container>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate('/dashboard')}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {category.name}
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>{category.name}</Typography>
        <Grid container spacing={2} justifyContent="center">
          {category.images.map((img, idx) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={idx}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: 180,
                  width: 150,
                  mx: 'auto',
                  boxShadow: 1,
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.03)' }
                }}
                onClick={() => {
                  setDialogIndex(idx);
                  setOpenDialog(true);
                }}
              >
                <CardMedia
                  component="img"
                  height="120"
                  image={img.url}
                  alt={category.name + ' ' + (idx + 1)}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 1, pb: '8px !important' }}>
                  <Typography variant="caption" gutterBottom sx={{ display: 'block' }} noWrap>
                    {img.description}
                  </Typography>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Tooltip title={imageStates[idx]?.liked ? 'Unlike' : 'Like'}>
                      <IconButton
                        color={imageStates[idx]?.liked ? 'primary' : 'default'}
                        size="small"
                        sx={{ p: 0.5 }}
                        onClick={e => {
                          e.stopPropagation();
                          setImageStates((prev) => prev.map((state, i) =>
                            i === idx
                              ? { ...state, liked: !state.liked, likeCount: state.liked ? state.likeCount - 1 : state.likeCount + 1 }
                              : state
                          ));
                        }}
                      >
                        <ThumbUpIcon sx={{ fontSize: '1rem' }} />
                      </IconButton>
                    </Tooltip>
                    <Typography variant="caption">{imageStates[idx]?.likeCount || 0}</Typography>
                    <Tooltip title={imageStates[idx]?.favorited ? 'Remove from favorites' : 'Add to favorites'}>
                      <IconButton
                        color={imageStates[idx]?.favorited ? 'secondary' : 'default'}
                        size="small"
                        sx={{ p: 0.5 }}
                        onClick={e => {
                          e.stopPropagation();
                          // Create new states array with updated favorited status
                          setImageStates((currentStates) => {
                            const newStates = currentStates.map((imgState, i) =>
                              i === idx
                                ? { ...imgState, favorited: !imgState.favorited }
                                : imgState
                            );
                            
                            // Get current favorites from localStorage
                            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
                            const currentState = currentStates[idx];
                            
                            // If not currently favorited, add to favorites
                            if (!currentState.favorited) {
                              favorites.push({
                                url: category.images[idx].url,
                                description: category.images[idx].description,
                                likeCount: currentState.likeCount || 0,
                                category: category.name
                              });
                            } else {
                              // If currently favorited, remove from favorites
                              const index = favorites.findIndex(f => f.url === category.images[idx].url);
                              if (index !== -1) {
                                favorites.splice(index, 1);
                              }
                            }
                            
                            // Save updated favorites to localStorage
                            localStorage.setItem('favorites', JSON.stringify(favorites));
                            return newStates;
                          });
                        }}
                      >
                        {imageStates[idx]?.favorited ? 
                          <FavoriteIcon sx={{ fontSize: '1rem' }} /> : 
                          <FavoriteBorderIcon sx={{ fontSize: '1rem' }} />
                        }
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Dialog for image deep description */}
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          fullScreen={fullScreen}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              width: { xs: '90%', sm: '50vw', md: '40vw' },
              maxWidth: 600,
              borderRadius: 3
            }
          }}
        >
          {dialogIndex !== null && (
            <>
              <DialogTitle>{category.images[dialogIndex].description}</DialogTitle>
              <DialogContent>
                <Box sx={{ textAlign: 'center' }}>
                  <img
                    src={category.images[dialogIndex].url}
                    alt={category.name + ' ' + (dialogIndex + 1)}
                    style={{ width: '100%', maxHeight: 250, objectFit: 'contain', borderRadius: 8 }}
                  />
                </Box>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {category.images[dialogIndex].deepDescription}
                </Typography>
              </DialogContent>
            </>
          )}
        </Dialog>
        <Box textAlign="center" mt={4}>
          <Button variant="outlined" onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
        </Box>
      </Container>
    </Box>
  );
}
