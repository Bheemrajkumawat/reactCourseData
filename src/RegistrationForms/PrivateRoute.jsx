import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({myuser}) {
 const user =JSON.parse(localStorage.getItem("user"))
  return user ? myuser : <Navigate to="/login" replace/>
}

export default PrivateRoute
