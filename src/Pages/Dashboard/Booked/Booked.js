import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Book from './Book';

const Booked = () => {
    const { user } = useAuth();
    const [booked, setBooked] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/userbooking/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBooked(data))
    }, [user?.email])
    // console.log(booked);
    return (
        <Box>
            <Container>
                <Box>
                    <Typography variant="h3" gutterBottom component="div" sx={{ py: 3 }} style={{ fontWeight: 700 }}>
                        MY <span style={{ color: '#a6a3a3' }}>BOOKINGS</span>
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    {
                        booked.map(book => <Book
                            key={book?._id}
                            book={book} />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Booked;