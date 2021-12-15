import React from 'react';
import Slider from "react-slick";
import { Box, Container, Typography } from '@mui/material';

const Review = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    // const textColor = {
    //     color: 'white',
    //     fontWeight: 700
    // }
    return (
        <div>
            <Container>
                <Box>
                    <Typography variant="h2" gutterBottom component="div" sx={{ fontWeight: 700 }}>
                        REVIEWS
                    </Typography>
                </Box>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Slider>
            </Container>
        </div>
    );
};

export default Review;