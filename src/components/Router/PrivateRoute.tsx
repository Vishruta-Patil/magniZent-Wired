import { useAppSelector } from "hooks"
import React from "react"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute : Function  = ({children} : {children: React.ReactNode}) => {
    const location = useLocation()
    const {authToken} = useAppSelector(store => store.auth)
    
    const validateAuth = () => {
        if(authToken) 
            return true
        return false
    }

    const authenticatedUser = validateAuth()
    return authenticatedUser ? children : <Navigate to="/login" state={{from : location}} replace/>
}