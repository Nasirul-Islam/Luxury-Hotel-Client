import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { user } = useAuth();
    let location = useLocation();
    return user?.email ? children
        :
        <Navigate to="/home" state={{ from: location }} />;
};

export default AdminRoute;