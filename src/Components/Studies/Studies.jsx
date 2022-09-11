import React from 'react';
import Box from '@mui/material/Box';

const Studies = ()=>{
  return(
    <>
    <h2>Studies</h2>
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'rgba(0,0,0)',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    </>
  );
};
export default Studies;