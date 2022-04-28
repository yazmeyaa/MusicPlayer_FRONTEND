import styled from 'styled-components'

export const Container = styled.div`
    &{
        border: 1px solid black;
        box-sizing: border-box;
        display: flex;
        min-width: 100%;
        flex-direction: column;
        align-items: center;
        padding-top: 1rem;
        border-top: 4px black;
        border-style: ridge;
        background-color: #56A0E0;
        justify-content: space-between;
        user-select: none;
    }
`

export const SubContainer = styled.div`
    &{
        box-sizing: border-box;
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
`