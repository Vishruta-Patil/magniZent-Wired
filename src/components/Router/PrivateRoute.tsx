import { useAppSelector } from "hooks"
import React from "react"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute : Function  = ({children} : {children: React.ReactNode}) => {
    const location = useLocation()
    const {authToken} = useAppSelector(store => store.auth)
    
    return authToken ? children : <Navigate to="/login" state={{ from: location }} replace />
}