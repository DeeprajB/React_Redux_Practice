import React, { useState } from 'react';

import { useGetPostByIDQuery } from '../api/postByIDSlice';

import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(cyan[200]),
  backgroundColor: cyan[200],
  '&:hover': {
    backgroundColor: cyan[500],
  },
}));

function SearchPostByID() {
  const [fieldValue, setFieldValue] = useState(1);
  const [postID, setPostID] = useState(1);
  const { data, isLoading } = useGetPostByIDQuery(postID);

  const handleSearch = () => {
    setPostID(fieldValue)
  };

  return (
    <>
      <Box
        className="flex flex-col justify-center items-center my-5"
        sx={{
          width: '80vw',
          backgroundColor: '#E0B0FF',
        }}
      >
        <p className="pt-5 text-2xl font-semibold justify-center">Search Post By ID</p>
        <div className="flex m-5 space-x-4 items-center">
          <TextField
            required
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
            size="small"
            type="number"
            id="outlined-basic"
            variant="outlined"
          />
          <ColorButton onClick={handleSearch} variant="contained">
            Search Post #{postID}
          </ColorButton>
        </div>
        {isLoading ? (
          <h1 className="m-5">Loading</h1>
        ) : (
          <div className="flex flex-col mb-5 p-1 text-center">
            <h2 className="text-xl font-semibold">Post {data.id}</h2>
            <h3>Title: {data.title}</h3>
            <p>Body: {data.body}</p>
          </div>
        )}
      </Box>
    </>
  );
}

export default SearchPostByID;
