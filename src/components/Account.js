import React from 'react'

import { Box, Button, TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(cyan[200]),
    backgroundColor: cyan[200],
    '&:hover': {
      backgroundColor: cyan[500],
    },
  }));

function Account() {
  return (
    <>
        <Box className="flex flex-col justify-center items-center my-5" sx={{
        width: 1000,
        backgroundColor: '#E0B0FF',
        }}>
            <p className="pt-5 text-2xl font-semibold justify-center">Account Handler</p>
            <div className="p-5 space-x-8">
                <ColorButton variant="contained">Increment +</ColorButton>
                <ColorButton variant="contained">Decrement -</ColorButton>
            </div>
            <div className="flex pb-5 space-x-8 items-center">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <ColorButton variant="contained">Increment</ColorButton>
            </div>
        </Box>
    </>
  )
}

export default Account