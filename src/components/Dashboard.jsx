import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProductSection from './ProductSection';

const imageList = [
  { url: 'img/imgshow1.jpg', alt: 'Craftsvilla Banner 1' },
  { url: 'img/imgshow2.jpg', alt: 'Craftsvilla Banner 2' },
  { url: 'img/imgshow3.jpg', alt: 'Craftsvilla Banner 3' },
];

export default function Dashboard() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Box sx={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: '#fff',
            textAlign: 'center',
            py: 2,
            zIndex: 2,
          }}
        >
          <Typography variant="h1" sx={{ mt: 0 }}>Welcome to Craftsvilla</Typography>
          <Typography variant="body1">Your one-stop shop for all crafts</Typography>
        </Box>
        <Box
          component="img"
          src={imageList[currentIndex].url}
          alt={imageList[currentIndex].alt}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            mt: 10,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
        >
          <IconButton onClick={handlePrev} sx={{ color: '#fff' }}>
            <ArrowBackIosIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
        >
          <IconButton onClick={handleNext} sx={{ color: '#fff' }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      <ProductSection />
    </>
  );
}
