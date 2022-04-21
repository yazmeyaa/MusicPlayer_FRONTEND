import styled from 'styled-components'

export const Container = styled.div`
    &{
        display: flex;
        min-width: 100%;
        flex-direction: column;
        align-items: center;
        border-top: 1px solid black;
        padding-top: 1rem;
    }
`

export const SubContainer = styled.div`
    &{
        box-sizing: border-box;
        display: flex;
        border: 1px solid green;
        width: 100%;
        justify-content: center;
    }
`

export const VolumeInput = styled.input`
    &{
        justify-self: flex-end;
    }
`