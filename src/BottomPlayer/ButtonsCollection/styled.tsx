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
        border: 2px solid #240090;
        background-color: #1c1c1c;
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
        background-color: #240090;
        border: none;
        font-size: 24px;
        font-weight: 300;
        border: 1px solid #190061;
        transition: .2s;
        border-radius: .5rem;
        cursor: pointer;
        color: rgb(232,232,332);
        padding: .5rem 1rem;
    }
    &:hover{
        background-color: #3500D3;
        border: 1px solid transparent;
        box-shadow: 0px 0px 4px 4px #3c00ee44;
        color: white;
    }
`

export const ButtonIcons = styled.img`
    &{
        object-fit: cover;
        width: 1rem;
        height: auto;
    }
`