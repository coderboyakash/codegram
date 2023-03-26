import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PersistLogin from './components/PersistLogin/PersistLogin'
import RequireAuth from './components/RequireAuth/RequireAuth'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RequireAuth />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route element={<PersistLogin />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
