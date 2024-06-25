import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/Authprovider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Loading...</div>; // or a loading spinner
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
