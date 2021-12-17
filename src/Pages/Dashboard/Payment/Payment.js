import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Payment = () => {
    return (
        <Box>
            <Container>
                <Box>
                    <Typography variant="h3" gutterBottom component="div" sx={{ py: 3 }} style={{ fontWeight: 700 }}>
                        <span style={{ color: '#a6a3a3' }}>
                            Cooming Soon...
                        </span>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Payment;