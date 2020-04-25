import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Dashboard from './Dashboard';

export default function App() {
  return (
    // <Container maxWidth="sm">
    //   <Box my={4}>
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       Anki Audio Assistant
    //     </Typography>
    //   </Box>
    // </Container>
    <Dashboard />
  );
}
