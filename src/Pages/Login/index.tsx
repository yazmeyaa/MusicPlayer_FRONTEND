import React from 'react'

interface LoginInterface {
    children: React.ReactChild | React.ReactNode
}

export const Login: React.FC<LoginInterface> = ({children}) => {
    return(
        <div>
            {children}
        </div>
    )
}