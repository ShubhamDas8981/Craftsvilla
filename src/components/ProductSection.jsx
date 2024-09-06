import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const products = [
  { title: 'Home Decor', discount: 'Min 15% Off', image: 'img/decor.jpg' },
  { title: 'Wireless Earphones', discount: 'Min 56% Off', image: 'img/earphones.jpg' },
  { title: 'Ethnic Wear', discount: 'Min 80% Off', image: 'img/ethnicwear.jpg' },
  { title: 'Sarees', discount: 'Min 20% Off', image: 'img/sarees.jpg' },
];

export default function ProductSection() {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Craftsvilla Rocket Deals
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary">
        Handpicked for you
      </Typography>

      <Grid container spacing={3} sx={{ mt: 3, justifyContent: 'center' }}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card sx={{ textAlign: 'center' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.discount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
