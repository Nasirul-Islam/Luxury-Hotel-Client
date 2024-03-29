import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
    const { googleLogin, signInWithEmail } = useAuth();
    const location = useLocation();
    let navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        signInWithEmail(data.email, data.password, location, navigate);
        reset();
    };
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
                        <input className='submitbtn' style={{ color: '#000', fontSize: '20px', fontWeight: 700 }} type="submit" value="Login" />
                    </form>
                    <br />
                    <Link to="/register" style={{ color: 'red', fontSize: '20px', fontWeight: 700 }}>
                        New User? Please Register
                    </Link>
                </Box>
                <Box sx={{ my: 4 }}>
                    <Button onClick={() => googleLogin(location, navigate)} variant="outlined" sx={{ py: 1 }} style={{ color: 'green', fontSize: '20px', fontWeight: 700, border: '1px solid green', width: '50%' }}>Login With Google</Button>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default Login;