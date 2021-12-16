import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Banner.css';

const Banner = () => {
    const textColor = {
        color: 'white',
        fontWeight: 700
    }
    return (
        <div className='banner'>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={5}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant="h6" gutterBottom component="div" sx={{ mt: 8, mb: 3 }} style={textColor}>
                                LIVE THE EXPERIENCE
                            </Typography>
                            <Typography variant="h1" gutterBottom component="div" sx={{ fontWeight: 700 }}
                                style={textColor} >
                                MAKE <br />
                                YOURSELF <br />
                                AT HOME
                            </Typography>
                            <Button variant="outlined"
                                style={{ fontSize: '1.5rem', color: 'white' }} sx={{ px: 4, py: 2 }}>
                                VIEW OUR ROOMS
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}></Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default Banner;

