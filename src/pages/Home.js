import React from 'react'

import Box from '@mui/material/Box';

import Account from '../components/Account';
import Bonus from '../components/Bonus';

function Home() {
  return (
    <>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl p-8 font-semibold" >Learn Redux with Accounts & Bonus!</h1>
            <div className="flex flex-row">
                <Box className="flex flex-col justify-center items-center" sx={{
                width: '40vw',
                backgroundColor: '#e39ff6',
                }}>
                    <p className="p-5 text-2xl text-black font-semibold">Current Amount</p>
                    <p className='pb-5'>NaN</p>
                </Box>
                <Box className="flex flex-col justify-center items-center" sx={{
                width: '40vw',
                backgroundColor: '#af69ef',
                }}>
                    <p className="p-5 text-2xl text-white font-semibold">Total Bonus</p>
                    <p className='pb-5 text-white'>NaN</p>
                </Box>
            </div>
            <Account />
            <Bonus />
        </div>
    </>
  )
}

export default Home