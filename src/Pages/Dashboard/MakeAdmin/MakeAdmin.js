import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`https://blooming-cliffs-04008.herokuapp.com/admin/${data?.email}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    alert("Make Admin Successfully")
                }
            })
        reset();
    };
    return (
        <Box>
            <Container>
                <Box>
                    <Typography variant="h3" gutterBottom component="div" sx={{ py: 3 }} style={{ fontWeight: 700 }}>
                        MAKE A <span style={{ color: '#a6a3a3' }}>NEW ADMIN</span>
                    </Typography>
                </Box>
                <Box className='register'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Email' type="email"
                            {...register("email", { required: true })} />
                        <br />
                        <input className='submitbtn' style={{ color: '#000', fontSize: '20px', fontWeight: 700 }} type="submit" value="Confirm" />
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default MakeAdmin;