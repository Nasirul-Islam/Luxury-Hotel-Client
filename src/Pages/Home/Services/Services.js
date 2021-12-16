import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import useRooms from '../../../hooks/useRooms';
import Service from './Service';

const Services = () => {
    const { rooms } = useRooms();
    console.log(rooms);
    return (
        <Box style={{ backgroundColor: '#e6e6e6' }} sx={{ pb: 8 }}>
            <Container>
                <Grid container spacing={3} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" gutterBottom component="div" sx={{ fontWeight: 700, my: 8, textAlign: 'left' }}>
                            OUR ROOMS <br /> AND SUITES
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
                        <Button variant="outlined"
                            style={{ fontSize: '1.5rem', color: '#000', boxShadow: '10px 10px 10px gray' }} sx={{ px: 4, py: 2 }}>
                            VIEW ALL ROOMS
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {
                        rooms?.slice(0, 4).map(room => <Service
                            key={room?._id}
                            room={room} />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;