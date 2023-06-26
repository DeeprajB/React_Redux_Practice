import React from 'react'
// import { useSelector } from 'react-redux';

// import Box from '@mui/material/Box';

import AllPosts from '../components/allPosts'
import SearchPostByID from '../components/searchPostByID'

function Home() {

  return (
    <>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl p-8 font-semibold" >Learn Redux with Render all Post & Search Post by ID!</h1>
            <div className="flex flex-row">
                {/* <Box className="flex flex-col justify-center items-center" sx={{
                width: '40vw',
                backgroundColor: '#e39ff6',
                }}>
                    <p className="p-5 text-2xl text-black font-semibold">Current Amount</p>
                    <p className='pb-5'>{useSelector((state) => state.amount)}</p>
                </Box> */}
            </div>
            <SearchPostByID />
            <AllPosts />
            {/* <Account /> */}
            {/* <Bonus /> */}
        </div>
    </>
  )
}

export default Home