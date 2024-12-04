import React from 'react'
import { KEY_ACCESS_TOKEN, getItem } from '../../utils/localStorageManager'
import { Navigate, Outlet } from 'react-router-dom';
import { loginRoute } from '../../Common/routes';

const RequireAdmin = () => {
    const authToken = getItem(KEY_ACCESS_TOKEN);
  return (
    authToken ? <Outlet /> : <Navigate to={loginRoute.path} />
  )
}

export default RequireAdmin