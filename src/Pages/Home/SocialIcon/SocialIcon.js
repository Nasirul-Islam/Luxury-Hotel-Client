import { Box, Container, Typography, Grid } from '@mui/material';
import React from 'react';
import girl from '../../../images/girl-in-the-pool.jpg';
import breakfast from '../../../images/breakfast.jpg';
import room from '../../../images/room.jpg';
import housekeeper from '../../../images/housekeeper-cleaning.jpg';

const SocialIcon = () => {
    return (
        <Box>
            <Container>
                <Box sx={{ py: 5, display: 'flex', justifyContain: 'space-butween' }}>
                    <Typography>SOCIALS</Typography>
                    <Box>hello</Box>
                </Box>
            </Container>
            <Grid container spacing={0} sx={{ mb: -1 }} style={{ width: '100%' }}>
                <Grid item xs={12} md={6} lg={3}>
                    <img width={'100%'} height={'100%'} src={girl} alt="girl" />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <img width={'100%'} height={'100%'} src={breakfast} alt="breakfast" />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <img width={'100%'} height={'100%'} src={room} alt="room" />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <img width={'100%'} height={'100%'} src={housekeeper} alt="housekeeper" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default SocialIcon;