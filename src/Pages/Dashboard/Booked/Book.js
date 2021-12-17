import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import useRooms from '../../../hooks/useRooms';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

const Book = ({ book }) => {
    const { roomid, status } = book;
    const { rooms } = useRooms();
    const room = rooms?.filter(room => room._id === roomid);
    console.log(room);
    return (
        <>
            {
                room?.map(bookedRoom =>
                    <Grid key={bookedRoom?._id} item xs={12} md={6}>
                        <Card style={{ boxShadow: '-10px -12px 15px gray' }}>
                            <CardMedia
                                component="img"
                                alt="room"
                                height="400px"
                                image={bookedRoom?.img}
                            />
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, textAlign: 'left' }}>
                                        {bookedRoom?.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700, textAlign: 'left' }}>
                                        {bookedRoom?.sizeResidents}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary"
                                        sx={{ fontWeight: 700, textAlign: 'right' }}>
                                        from
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700 }}>
                                        ${bookedRoom?.price}
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="body1" color="warning.main" sx={{ fontWeight: 700, pl: 2 }}>
                                    {status}
                                </Typography>
                                <Button variant="outlined" color="error" size="small">Cancel</Button>
                            </CardActions>
                        </Card>
                    </Grid>)
            }

        </>
    );
};

export default Book;