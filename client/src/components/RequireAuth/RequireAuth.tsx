import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { selectToken } from '../../store/Auth/AuthSlice'

const RequireAuth:FC = () => {
    const token = useSelector(selectToken)
    return (
        token ? <Outlet/> : <Navigate to={'/login'} />
    )
}

export default RequireAuth