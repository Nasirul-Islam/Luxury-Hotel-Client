import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Register.css';

const Register = () => {
    const { emailLogin } = useFirebase();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        emailLogin(data.email, data.password, data.displayName);
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
                        <input style={{ color: '#000', fontSize: '20px', fontWeight: 700 }} type="submit"
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