import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Services = () => {
    return (
        <div>
            <Container>
                <Box>
                    <Typography variant="h2" gutterBottom component="div" sx={{ fontWeight: 700 }}>
                        OUR ROOMS
                    </Typography>
                </Box>
                <Box>
                    <h3>dynamic services</h3>
                </Box>
            </Container>
        </div>
    );
};

export default Services;