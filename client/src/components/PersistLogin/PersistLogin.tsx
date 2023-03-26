import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import { selectToken } from '../../store/Auth/AuthSlice'

const PersistLogin:FC = () => {
    const token = useSelector(selectToken)
    return (
        token ? <Home/> : <Outlet />
    )
}

export default PersistLogin