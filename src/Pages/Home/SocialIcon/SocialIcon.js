import { Box, Container, Typography, Grid } from '@mui/material';
import React from 'react';
import girl from '../../../images/girl-in-the-pool.jpg';
import breakfast from '../../../images/breakfast.jpg';
import room from '../../../images/room.jpg';
import housekeeper from '../../../images/housekeeper-cleaning.jpg';
import facebook from '../../../images/icon/facebook.png'
import instagram from '../../../images/icon/instagram.png'
import youtube from '../../../images/icon/youtube.png'
import twitter from '../../../images/icon/twitter.png'

const SocialIcon = () => {
    return (
        <Box>
            <Container>
                <Grid container spacing={1} sx={{ py: 5 }}>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                        <Typography variant="h2" gutterBottom component="div" sx={{ fontWeight: 600 }}>SOCIALS</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
                        <a href="facebook.com" style={{ marginLeft: '15px' }}>
                            <img width={'50px'} height={'50px'}
                                src={facebook} alt="fb" />
                        </a>
                        <a href="twitter.com" style={{ marginLeft: '15px' }}>
                            <img width={'50px'} height={'50px'}
                                src={twitter} alt="twitter" />
                        </a>
                        <a href="instagram.com" style={{ marginLeft: '15px' }}>
                            <img width={'50px'} height={'50px'}
                                src={instagram} alt="instagram" />
                        </a>
                        <a href="youtube.com" style={{ marginLeft: '15px' }}>
                            <img width={'50px'} height={'50px'}
                                src={youtube} alt="youtube" />
                        </a>
                    </Grid>
                </Grid>
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