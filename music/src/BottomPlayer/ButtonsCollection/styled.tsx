import styled from 'styled-components'

export const ButtonsContainer = styled.div`
    &{
        display: flex;
        gap: 1rem;
        padding: .5rem;
        justify-content: center;
        flex-basis: 100%;
    }
`

export const ButtonsBody = styled.div`
    &{
        border: 2px solid black;
        display: flex;
        justify-content: center;
        gap: 1rem;
        padding: .5rem;
        border-radius: 1rem;
    }
`

export const SingleButton = styled.button`
    &{
        box-sizing: border-box;
        justify-self: center;
        align-self: center;
        background-color: #E056A0;
        border: none;
        font-size: 24px;
        border: 1px solid #8C3664;
        transition: .2s;
        border-radius: .5rem;
        cursor: pointer;
        color: rgb(232,232,332)
    }
    &:hover{
        background-color: #EC95C4;
        border: 1px solid transparent;
        box-shadow: 0px 0px 4px 4px #EFABD0;
        color: white;
    }
`