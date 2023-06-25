import React,{useState} from 'react'

import { useDispatch } from 'react-redux';
import {Increment,Decrement,IncrementByValue} from '../states/reducers/amountReducer'

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
  const dispatch = useDispatch()
  const [incValue,setIncValue] = useState(0)
  return (
    <>
        <Box className="flex flex-col justify-center items-center my-5" sx={{
        width: '80vw',
        backgroundColor: '#E0B0FF',
        }}>
            <p className="pt-5 text-2xl font-semibold justify-center">Amount Handler</p>
            <div className="flex p-5 space-x-4">
                <ColorButton onClick={() => dispatch(Increment())} variant="contained">Increment +</ColorButton>
                <ColorButton onClick={() => dispatch(Decrement())} variant="contained">Decrement -</ColorButton>
            </div>
            <div className="flex mb-5 space-x-4 items-center">
                <TextField required value={incValue} onChange={(e) => setIncValue(e.target.value)} size="small" type='number' id="outlined-basic" variant="outlined" />
                <ColorButton onClick={() => dispatch(IncrementByValue(Number(incValue)))} variant="contained">Increment By {incValue}</ColorButton>
            </div>
        </Box>
    </>
  )
}

export default Account