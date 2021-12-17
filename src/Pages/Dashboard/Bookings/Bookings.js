import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://blooming-cliffs-04008.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    console.log(bookings);
    return (
        <Box>
            <Container>
                <Box>
                    <Typography variant="h3" gutterBottom component="div" sx={{ py: 3 }} style={{ fontWeight: 700 }}>
                        ALL USERS <span style={{ color: '#a6a3a3' }}>BOOKINGS</span>
                    </Typography>
                </Box>
                <Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        #
                                    </TableCell>
                                    <TableCell align="right">
                                        Name
                                    </TableCell>
                                    <TableCell align="right">
                                        Email
                                    </TableCell>
                                    <TableCell align="right">
                                        Room Id
                                    </TableCell>
                                    <TableCell align="right">
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {bookings?.map((row, index) => (
                                    <TableRow
                                        key={row?._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row?.displayName}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row?.email}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row?.roomid}
                                        </TableCell>
                                        <TableCell align="right">
                                            delete/confirm
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </Box>
    );
};

export default Bookings;