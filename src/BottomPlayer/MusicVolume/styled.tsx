import styled from "styled-components"

export const VolumeInput = styled.input`
    &{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
        box-sizing: border-box;
        position: absolute;
        left: 90%;
        transform: translate(-80%);
    }

    &::-webkit-slider-runnable-track{
        background-color: #190061;
        border-radius: 1rem;
    }

    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        background-color: #240090;
        height: 1rem;
        border: 1px solid #0C0032;
        width: 1rem;
        border-radius: 50%;
    }

    &::-ms-track{
        background: transparent;
    }

    &::-ms-fill-lower{
        -webkit-appearance: none;
        background-color: #3500D3;
    }
    &::-ms-fill-upper{
        background-color: #0C0032;
    }
`