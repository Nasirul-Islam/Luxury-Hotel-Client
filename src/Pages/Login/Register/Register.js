import React from 'react';
import './Register.css';
import { Box, Container, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { emailLogin } = useAuth();
    const location = useLocation();
    let navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        emailLogin(data.email, data.password, data.displayName, location, navigate);
        console.log(data);
        reset();
    };
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
                            {...register("displayName", { required: true })} />
                        <br />
                        <input placeholder='Email' type="email"
                            {...register("email", { required: true })} />
                        <br />
                        <input placeholder='Password' type="password"
                            {...register("password", { required: true })} />
                        <br />
                        <input placeholder='Address' type="text"
                            {...register("address")} />
                        <br />
                        <input placeholder='Phone Number' type="number"
                            {...register("phone")} />
                        <br />
                        <input className='submitbtn' style={{ color: '#000', fontSize: '20px', fontWeight: 700 }} type="submit"
                            value="Register" />
                    </form>
                    <br />
                    <Link to="/login" style={{ color: 'green', fontSize: '20px', fontWeight: 700 }}>
                        Already Register? Please Login
                    </Link>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default Register;