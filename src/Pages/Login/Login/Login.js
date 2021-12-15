import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <Navigation />
            <Container sx={{ mt: 10, mb: 8 }} className='register'>
                <Box>
                    <Typography variant="h3" gutterBottom component="div" sx={{ py: 4 }} style={{ fontWeight: 700 }}>
                        LogIn With <span style={{ color: '#a6a3a3' }}>LUXURY HOTEL</span>
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Email' type="email"
                            {...register("email", { required: true })} />
                        <br />
                        <input placeholder='Password' type="password"
                            {...register("password", { required: true })} />
                        <br />
                        <input style={{ color: '#000', fontSize: '20px', fontWeight: 700 }} type="submit"
                            value="Login" />
                    </form>
                    <br />
                    <Link to="/register" style={{ color: 'red', fontSize: '20px', fontWeight: 700 }}>
                        New User? Please Register
                    </Link>
                </Box>
                <Box>

                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default Login;