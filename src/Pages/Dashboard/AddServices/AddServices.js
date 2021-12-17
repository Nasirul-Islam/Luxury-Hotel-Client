import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/rooms', {
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
                        Add New Room in <span style={{ color: '#a6a3a3' }}>LUXURY HOTEL</span>
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Title' type="text"
                            {...register("title", { required: true })} />
                        <br />
                        <input placeholder='Description' type="text"
                            {...register("description", { required: true })} />
                        <br />
                        <input placeholder='Size and Residents' type="text"
                            {...register("sizeResidents", { required: true })} />
                        <br />
                        <input placeholder='Image Link' type="text"
                            {...register("img", { required: true })} />
                        <br />
                        <input placeholder='Price' type="number"
                            {...register("price", { required: true })} />
                        <br />
                        <input className='submitbtn' style={{ color: '#000', fontSize: '20px', fontWeight: 700 }} type="submit"
                            value="Add Room" />
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default AddServices;