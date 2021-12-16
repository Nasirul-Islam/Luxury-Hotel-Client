import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Service = ({ room }) => {
    console.log(room);
    const { sizeResidents, img, price, title, _id } = room;
    return (
        <Grid item xs={12} md={6}>
            <Link to={`/details/${_id}`}>
                <Card style={{ boxShadow: '-10px -12px 15px gray' }}>
                    <CardMedia
                        component="img"
                        alt="room"
                        height="400px"
                        image={img}
                    />
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, textAlign: 'left' }}>
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700, textAlign: 'left' }}>
                                {sizeResidents}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" color="text.secondary"
                                sx={{ fontWeight: 700, textAlign: 'right' }}>
                                from
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700 }}>
                                ${price}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
};

export default Service;