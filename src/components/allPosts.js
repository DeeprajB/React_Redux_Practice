import React, {useState} from 'react';

import { useGetAllPostQuery } from '../api/postsSlice';

import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(cyan[200]),
  backgroundColor: cyan[200],
  '&:hover': {
    backgroundColor: cyan[500],
  },
}));

function AllPosts() {
  const { data, isLoading } = useGetAllPostQuery();
  const [allPost,setAllPost] = useState([])

  function handleClick(){
    setAllPost(data);
  }

  return (
    <>
      <Box className="flex flex-col justify-center items-center my-5" sx={{
        width: '80vw',
        backgroundColor: '#E0B0FF',
      }}>
        <p className="pt-5 text-2xl font-semibold justify-center">Get All Post</p>
        <div className="flex m-5 space-x-4 items-center">
          <ColorButton onClick={handleClick} variant="contained">Get All Posts</ColorButton>
        </div>
        {isLoading ? (
          <h1 className='m-5'>Loading</h1>
        ) : (
          <div className="flex flex-col mb-5 p-1 text-center">
            {Array.isArray(allPost) ? (
              allPost.map((post, key) => (
                <div className='m-4 p-2 bg-cyan-400' key={key}>
                  <h2 className='text-xl font-semibold'>Post {post.id}</h2>
                  <h3>Title: {post.title}</h3>
                  <p>Body: {post.body}</p>
                </div>
              ))
            ) : (
              <p>No posts available</p>
            )}
          </div>
        )}
      </Box>
    </>
  );
}

export default AllPosts;