import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme } from '@mui/material/styles';

const demoTheme = createTheme({
  palette: {
    primary: {
      main: '#821131', // Purple color
    },
    secondary: {
      main: '#EC1C24', // Red color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Customize font family
    body1: {
      fontSize: '1rem',
      color: '#777', // Grey color for text
    },
  },
});

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: demoTheme.palette.primary.main,
        color: '#fff',
        textAlign: 'center',
      }}
    >
            <Typography
        variant="body1"
        sx={{
          fontFamily: demoTheme.typography.fontFamily,
          pl: { xs: 0, md: 40 },
          pb: { xs: 0, md: 5 }, // No padding on small screens, 4 units padding on medium and larger
        }}
      >
        © {new Date().getFullYear()} Craftsvilla. All rights reserved.
      </Typography>


      <Box
        sx={{
          mt: "auto",
          display: 'flex',
          justifyContent: {
            xs: 'center',  // Center align on small screens
            md: 'flex-end', // Align to the right on medium screens and larger
          },
          pr: { md: 4 }, // Add padding-right on desktop view
        }}
      >
        <Link href="/terms" color="inherit" sx={{ mx: 2}}>
          Terms & Conditions
        </Link>
        <Link href="/privacy" color="inherit" sx={{ mx: 2 }}>
          Privacy Policy
        </Link>
        <Link href="/contact" color="inherit" sx={{ mx: 2 }}>
          Contact Us
        </Link>
      </Box>
    </Box>
  );
}
