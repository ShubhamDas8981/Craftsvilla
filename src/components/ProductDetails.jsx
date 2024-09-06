// ProductDetails.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

function ProductDetails({ category, products }) {
  const filteredProducts = products.filter(
    (product) => product.catName === category
  );

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h2" gutterBottom>
        Products in {category}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filteredProducts.map((product) => (
          <Card key={product.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="h6">{product.price}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

ProductDetails.propTypes = {
  category: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductDetails;
