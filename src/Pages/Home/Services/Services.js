import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import useRooms from '../../../hooks/useRooms';
import Service from './Service';
import { Link } from 'react-router-dom';

const Services = () => {
    const { rooms } = useRooms();
    return (
        <Box style={{ backgroundColor: '#e6e6e6' }} sx={{ pb: 8 }}>
            <Container>
                <Grid container spacing={1} sx={{ display: 'flex', alignItems: 'center', py: 8 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" gutterBottom component="div" sx={{ fontWeight: 700, textAlign: 'left' }}>
                            OUR ROOMS <br /><span style={{ color: '#a6a3a3' }}>AND SUITES</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
                        <Link to="/allServices">
                            <Button variant="outlined"
                                style={{ fontSize: '1.5rem', color: '#000', boxShadow: '10px 10px 10px gray' }} sx={{ px: 4, py: 2 }}>
                                VIEW ALL ROOMS
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
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