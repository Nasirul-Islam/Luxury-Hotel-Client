import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Container, Typography } from '@mui/material';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://blooming-cliffs-04008.herokuapp.com/review', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("add successfully");
                }
            })
        reset();
    };
    return (
        <div>
            <Container sx={{ my: 2 }} className='register'>
                <Box>
                    <Typography variant="h3" gutterBottom component="div" sx={{ py: 4 }} style={{ fontWeight: 700 }}>
                        Give Review in <span style={{ color: '#a6a3a3' }}>LUXURY HOTEL</span>
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Name' type="text"
                            {...register("name", { required: true })} />
                        <br />
                        <input placeholder='Comment' type="text"
                            {...register("comment", { required: true })} />
                        <br />
                        <input placeholder='Image Link' type="text"
                            {...register("img", { required: true })} />
                        <br />
                        <input placeholder='Rating' type="number"
                            {...register("rating", { min: 0, max: 5, required: true })} />
                        <br />
                        <input className='submitbtn' style={{ color: '#000', fontSize: '20px', fontWeight: 700 }} type="submit"
                            value="Give Review" />
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default AddReview;