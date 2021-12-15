import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Register.css';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <Navigation />
            <Container sx={{ mt: 10, mb: 8 }} className='register'>
                <Box>
                    <Typography variant="h3" gutterBottom component="div" sx={{ py: 4 }} style={{ fontWeight: 700 }}>
                        Register With <span style={{ color: '#a6a3a3' }}>LUXURY HOTEL</span>
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Name' type="text"
                            {...register("DisplayName", { required: true })} />
                        <br />
                        <input placeholder='Email' type="email"
                            {...register("email", { required: true })} />
                        <br />
                        <input placeholder='Password' type="password"
                            {...register("password", { required: true })} />
                        <br />
                        <input placeholder='Address' type="text"
                            {...register("address", { required: true })} />
                        <br />
                        <input placeholder='Phone Number' type="number"
                            {...register("phone")} />
                        <br />
                        <input style={{ color: '#000', fontSize: '20px', fontWeight: 700 }} type="submit"
                            value="Register" />
                    </form>
                    <br />
                    <Link to="/login" style={{ color: 'green', fontSize: '20px', fontWeight: 700 }}>
                        Already Register? Please Login
                    </Link>
                </Box>
                <Box>

                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default Register;