import React from 'react'

import { useDispatch } from 'react-redux';
import { Increment,Decrement } from '../states/reducers/bonusReducer';

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
  const dispatch = useDispatch()
  return (
    <>
        <Box className="flex flex-col justify-center items-center my-5" sx={{
        width: '80vw',
        backgroundColor: '#9575cd',
        }}>
            <p className="pt-5 text-white text-2xl font-semibold justify-center">Bonus Handler</p>
            <div className="flex p-5 space-x-8">
                <ColorButton onClick={() => dispatch(Increment())} variant="contained">Increment +</ColorButton>
                <ColorButton onClick={() => dispatch(Decrement())} variant="contained">Decrement -</ColorButton>
            </div>
        </Box>
    </>
  )
}

export default Bonus