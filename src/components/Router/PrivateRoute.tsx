import React from "react"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute : Function  = ({children} : {children: React.ReactNode}) => {
    const location = useLocation()
    
    const validateAuth = () => {
        if(localStorage.getItem('authToken')) 
            return true
        return false
    }

    const authenticatedUser = validateAuth()
    return true ? children : <Navigate to="/login" state={{from : location}} replace/>
}