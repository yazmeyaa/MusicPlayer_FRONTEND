import {Routes, Route} from 'react-router-dom'

import {Landing} from '../Pages/Landing/'


export const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Landing />} />
        </Routes>
    )
}