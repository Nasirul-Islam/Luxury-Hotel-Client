import { Box, Button, Container, Typography, Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
    const textColor = {
        color: 'white',
        fontWeight: 700
    }
    const Hline = {
        border: '1px solid gray'
    }
    return (
        <Box sx={{
            backgroundColor: 'black',
        }}>
            <Container>
                <Grid container spacing={1}
                    sx={{
                        py: 8,
                        textAlign: 'left'
                    }}
                    style={textColor}
                >
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ mb: 4 }} variant="h4" gutterBottom component="div">
                            LUXURY <br /> HOTEL
                        </Typography>
                        <Typography sx={{ mb: 4 }}>
                            2422 Scott Street, <br />
                            Middletown, New York
                        </Typography>
                        <Typography sx={{ mb: 4 }}>
                            89 76 99 55 34 <br />
                            luxury@hotel.com
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Typography sx={{ mb: 4 }}>The Hotel</Typography>
                        <Typography sx={{ mb: 4 }}>Rooms & Suites
                        </Typography>
                        <Typography sx={{ mb: 4 }}>Experience</Typography>
                        <Typography sx={{ mb: 4 }}>Contact Us</Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Typography sx={{ mb: 4 }}>Restaurant</Typography>
                        <Typography sx={{ mb: 4 }}>Offers</Typography>
                        <Typography sx={{ mb: 4 }}>Jobs</Typography>
                        <Typography sx={{ mb: 4 }}>Seminars</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" gutterBottom component="div" sx={{ mb: 8 }}>
                            “Offer more than a gift voucher, offer an experience”
                        </Typography>
                        <Button variant="outlined"
                            style={textColor} sx={{ px: 4, py: 2 }}>
                            BOOK NOW</Button>
                    </Grid>
                </Grid>
            </Container>
            <hr style={Hline} />
            <Container>
                <Grid container spacing={1}
                    sx={{ py: 5, display: 'flex', justifyContent: 'space-between' }}
                    style={textColor}
                >
                    <Grid item xs={12} md={4}>
                        <Typography>
                            Copyright © 2021 LUXURY HOTEL
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}
                        sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ mx: 1 }}>Terms & Conditions</Typography>
                        <Typography>Privacy Policy</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;