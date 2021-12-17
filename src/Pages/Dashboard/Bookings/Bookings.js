import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    console.log(bookings);
    return (
        <Box>
            <Container>
                <Box>
                    <Typography variant="h3" gutterBottom component="div" sx={{ py: 4 }} style={{ fontWeight: 700 }}>
                        Give Review in <span style={{ color: '#a6a3a3' }}>LUXURY HOTEL</span>
                    </Typography>
                </Box>
                <Box></Box>
            </Container>
        </Box>
    );
};

export default Bookings;