import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';

const PrivateRoute = ({ children }) => {
    const { user, isloding } = useAuth();
    let location = useLocation();
    if (isloding) {
        return <CircularProgress />;
    }
    return user?.email ? children
        :
        <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;