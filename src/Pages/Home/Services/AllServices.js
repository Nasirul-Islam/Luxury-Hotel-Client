import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useRooms from '../../../hooks/useRooms';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Service from './Service';

const AllServices = () => {
    const { rooms } = useRooms();
    return (
        <Box>
            <Navigation />
            <Container sx={{ my: 12 }}>
                <Box sx={{ my: 8 }}>
                    <Typography variant="h2" gutterBottom component="div" sx={{ fontWeight: 700, my: 8 }}>
                        OUR ALL <span style={{ color: '#a6a3a3' }}>ROOMS AND SUITES</span>
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    {
                        rooms?.map(room => <Service
                            key={room?._id}
                            room={room} />)
                    }
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};

export default AllServices;