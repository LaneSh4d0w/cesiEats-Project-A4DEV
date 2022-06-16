import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from './components/navBar/navBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Navbar />
      </ThemeProvider>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Test. Bienvenue sur cesiEats
        </Typography>
      </Box>
    </div>
  );
}

