import styled from "styled-components";

export const ProgressBarContainer = styled.div`
    &{
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: .3rem;
        padding-bottom: .3rem;
    }
`

// ->



export const PregressBarBody = styled.div`
    &{
        display: flex;
        box-sizing: border-box;
        height: 20px;
        width: 80%;
        background-color: transparent;
        border: 1px solid black;
        border-radius: 1rem;
        overflow: hidden;
    }
    &:hover{
        box-shadow: 0px 0px 10px 5px #ffc8004f;
    }
`

// ->


export const CurrentProgressBar = styled.div`
    &{
        box-sizing: border-box;
        height: 100%;
        width: 0;
        max-width: 100%;
        background-color: yellow;
        border-right: 1px solid black;
    }
`

// ->

export const ProgressBarThumb = styled.div`
    &{
        height: 100%;
        width: 10px;
        border-radius: 1rem;
        background-color: orange;
        transform: translate(-50%);
        cursor: pointer;
    }
`