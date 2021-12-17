import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { Box, Container, Typography } from '@mui/material';
import SingleReview from './SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://blooming-cliffs-04008.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <Box style={{ backgroundColor: '#e6e6e6' }} sx={{ pb: 8 }}>
            <Container>
                <Box>
                    <Typography variant="h2" gutterBottom component="div" sx={{ fontWeight: 700, mb: 5 }}>
                        VISITOR <span style={{ color: '#a6a3a3' }}>EXPERIENCE</span>
                    </Typography>
                </Box>
                <Slider {...settings}>
                    {reviews?.map(review => <SingleReview
                        key={review._id}
                        review={review} />)}
                </Slider>
            </Container>
        </Box>
    );
};

export default Review;