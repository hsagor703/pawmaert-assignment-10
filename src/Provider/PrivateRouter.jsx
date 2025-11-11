import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { useLocation, useNavigate } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    if (user) {
        return children
    }else{
        return navigate('/')
    }
    
};

export default PrivateRouter;