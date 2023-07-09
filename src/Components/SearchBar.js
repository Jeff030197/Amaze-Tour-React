import * as React from 'react';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';



export default function SearchBar() {
  return (
    
    <Box
      sx={{
        width: 1100,
        maxWidth: '100%',
      }}
    >
      <form className='d-flex input-group w-auto frm'>
            <input type='search' className='form-control ' placeholder='Search Destination' aria-label='Search' /> <Button variant="contained" size="small">
          Search
        </Button>
        </form>
    </Box>
    
    
  );
}