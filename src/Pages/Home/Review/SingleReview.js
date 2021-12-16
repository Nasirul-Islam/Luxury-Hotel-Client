import { Paper, Typography, Box, Rating } from '@mui/material';
import React from 'react';
import Avatar from '@mui/material/Avatar';

const SingleReview = ({ review }) => {
    return (
        <>
            <Paper elevation={3} sx={{ mx: 1, p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Avatar alt="image" src={review?.img} />
                    </Box>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, ml: 2 }}>
                        {review?.name}
                    </Typography>
                </Box>
                <Box sx={{ py: 1 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 700 }}>
                        {review?.comment.slice(0, 150)}
                    </Typography>
                </Box>
                <Box>
                    <Rating name="read-only" value={review?.rating} readOnly />
                </Box>
            </Paper>
        </>
    );
};

export default SingleReview;