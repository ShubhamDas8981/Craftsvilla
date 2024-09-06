import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import CategoryIcon from '@mui/icons-material/Category';
import Dashboard from './Dashboard'; // Import the Dashboard component for the root route
import Footer from './Footer'; // Import Footer component

const demoTheme = createTheme({
  palette: {
    primary: {
      main: '#EC1C24', // Red color
    },
    secondary: {
      main: '#EC1C24', // Red color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Customize font family
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#4A1C67', // Custom purple color for the title
    },
  },
  cssVariables: {
    colorSchemeSelector: 'data-craftsvilla-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  if (pathname === '/') {
    return <Dashboard />; // If the pathname is "/", return the Dashboard component
  }

  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        flexGrow: 1, // Allow this Box to grow and push footer down
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic({ window, categories }) {
  const [pathname, setPathname] = React.useState('/');

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  const demoWindow = window !== undefined ? window() : undefined;

  const NAVIGATION = [
    {
      kind: 'header',
      title: 'Main items',
    },
    {
      segment: 'categories',
      title: 'Categories',
      icon: <CategoryIcon />,
      children: categories.map((category) => ({
        segment: category.catName.toLowerCase().replace(' ', '-'),
        title: category.catName,
        icon: <CategoryIcon />,
      })),
    },
    {
      segment: 'orders',
      title: 'Orders',
      icon: <ShoppingCartIcon />,
    },
  ];

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        logo: (
          <img
            src="img/logo.png"
            alt="Craftsvilla Logo"
            height="50"
            width="50"
          />
        ),
        title: (
          <Typography
            variant="h1"
            component="div"
            sx={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#C7253E',
              fontFamily: 'Georgia, serif',
            }}
          >
            Craftsvilla
          </Typography>
        ),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Ensure the container takes full viewport height
        }}
      >
        <DashboardLayout>
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}></Box>
          <DemoPageContent pathname={pathname} />
        </DashboardLayout>
        <Footer />
      </Box>
    </AppProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
  categories: PropTypes.array.isRequired,
};

export default DashboardLayoutBasic;
