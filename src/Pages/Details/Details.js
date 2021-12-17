import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import useRooms from '../../hooks/useRooms';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const { rooms } = useRooms();
    const room = rooms?.find(room => room._id === id);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.roomid = id;
        data.status = 'pending';
        console.log(data);
        fetch('https://blooming-cliffs-04008.herokuapp.com/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("Booking Successfully");
                }
            })
        reset();
    };
    return (
        <Box>
            <Navigation />
            <Container sx={{ mt: 16, mb: 10 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h2" gutterBottom component="div" sx={{ fontWeight: 700, my: 8, textAlign: 'left' }}>
                            ROOM <br /><span style={{ color: '#a6a3a3' }}>DETAILS</span>
                        </Typography>
                        <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 700, textAlign: 'left' }}>
                            {room?.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Card style={{ boxShadow: '10px 10px 10px gray' }}>
                            <CardMedia
                                component="img"
                                alt="room"
                                height="400px"
                                image={room?.img}
                            />
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, textAlign: 'left' }}>
                                        {room?.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700, textAlign: 'left' }}>
                                        {room?.sizeResidents}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary"
                                        sx={{ fontWeight: 700, textAlign: 'right' }}>
                                        from
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700 }}>
                                        ${room?.price}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Box sx={{ my: 5 }} className='register'>
                    <Typography variant="h3" gutterBottom component="div" sx={{ py: 4 }} style={{ fontWeight: 700 }}>
                        Confirm <span style={{ color: '#a6a3a3' }}>Your Room</span>
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input value={user?.displayName} type="text"
                            {...register("displayName", { required: true })} />
                        <br />
                        <input value={user?.email} type="email"
                            {...register("email", { required: true })} />
                        <br />
                        <input placeholder='Address' type="text"
                            {...register("address", { required: true })} />
                        <br />
                        <input placeholder='Phone Number' type="number"
                            {...register("phone", { required: true })} />
                        <br />
                        <input className='submitbtn' style={{ color: '#000', fontSize: '20px', fontWeight: 700 }} type="submit"
                            value="Confirm" />
                    </form>
                </Box>
            </Container>
            <Footer />
        </Box>
    );
};

export default Details;