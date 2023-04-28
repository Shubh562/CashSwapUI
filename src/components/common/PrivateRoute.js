import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isUserLoggedIn } from '../../services/auth.service';

export const PrivateRoute = ({ component }) => {
  return (isUserLoggedIn() ? <>{component}</> : <Navigate to='/login' />);
}
