import styled from "styled-components";

export const ProgressBody = styled.div`
    &{
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: .3rem;
        padding-bottom: .3rem;
    }
`

export const PregressBar = styled.input`
    &{
        -webkit-appearance: none;
        width: 80%;
        box-sizing: border-box;
    }
    &::-webkit-slider-runnable-track{
        background: yellow;
        border: 1px solid black;
        border-radius: 8px;
    }
    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        border: 1px solid black;
        background: black;
    }
`