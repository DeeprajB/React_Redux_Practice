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
        width: '80vw',
        backgroundColor: '#E0B0FF',
        }}>
            <p className="pt-5 text-2xl font-semibold justify-center">Account Handler</p>
            <div className="flex p-5 space-x-4">
                <ColorButton variant="contained">Increment +</ColorButton>
                <ColorButton variant="contained">Decrement -</ColorButton>
            </div>
            <div className="flex mb-5 space-x-4 items-center">
                <TextField size="small" id="outlined-basic" label="Outlined" variant="outlined" />
                <ColorButton variant="contained">Increment</ColorButton>
            </div>
        </Box>
    </>
  )
}

export default Account