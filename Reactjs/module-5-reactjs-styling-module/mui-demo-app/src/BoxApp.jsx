import React from 'react'
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

export default function BoxApp() {
  return (
    <div>
    <Box component="section" sx={{ p: 2, mt:5, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>


     <Box component="section" sx={{ p: 2, mt:5, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>

     <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 400,
          height: 100,
          marginLeft:10,
          marginTop:5,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>
    </div>
  )
}
