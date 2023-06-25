import React from 'react'

import { Box, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(cyan[200]),
    backgroundColor: cyan[200],
    '&:hover': {
      backgroundColor: cyan[500],
    },
  }));

function Bonus() {
  return (
    <>
        <Box className="flex flex-col justify-center items-center my-5" sx={{
        width: 1000,
        backgroundColor: '#9575cd',
        }}>
            <p className="pt-5 text-white text-2xl font-semibold justify-center">Bonus Handler</p>
            <div className="p-5 space-x-8">
                <ColorButton variant="contained">Increment +</ColorButton>
                <ColorButton variant="contained">Decrement -</ColorButton>
            </div>
        </Box>
    </>
  )
}

export default Bonus