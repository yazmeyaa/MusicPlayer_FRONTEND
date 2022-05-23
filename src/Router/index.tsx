import { FC, ReactElement } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from '../customHooks/useTypedSelector'
import { AuthPage } from '../Pages/AuthPage'

import { Landing } from '../Pages/Landing/'

export const Router = () => {
    const { JWT } = useAppSelector(state => state.UserState)
    return (
        <Routes>
            <Route path='/' element={
            <ProtectedRoutes token={JWT}>
                <Landing />
            </ProtectedRoutes>} />
            <Route path='/login' element={<AuthPage />}/>
            <Route path='*' element={<h1>404 not found</h1>}/>
        </Routes>
    )
}

interface IProtectedRoutes {
    children: ReactElement,
    token: string | null
}

const ProtectedRoutes: FC<IProtectedRoutes> = ({ token, children }) => {
    return token ? children : <Navigate to='/login' />
}