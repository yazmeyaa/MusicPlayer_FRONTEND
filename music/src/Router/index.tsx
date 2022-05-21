import { ReactInstance, ReactNode, FC } from 'react'
import {Routes, Route} from 'react-router-dom'
import { useAppSelector } from '../customHooks/useTypedSelector'

import {Landing} from '../Pages/Landing/'


export const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Landing />} />
        </Routes>
    )
}