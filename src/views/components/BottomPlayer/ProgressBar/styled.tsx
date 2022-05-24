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
        border: 1px solid #240090 ;
        border-radius: 6px;
        overflow: hidden;
        background-color: #0C0032;
        transition: .2s;
        position: relative;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    &:hover{
        box-shadow: 0px 0px 10px 5px #16005c33;
    }
`

// ->


export const CurrentProgressBar = styled.div`
    &{
        box-sizing: border-box;
        height: 100%;
        width: 0;
        max-width: 100%;
        background-color: #240090;
        border-right: 1px solid #0C0032;
    }
`

// ->

export const ProgressBarThumb = styled.div`
    &{
        height: 100%;
        width: 10px;
        border-radius: 1rem;
        background-color: #3500D3;
        transform: translate(-50%);
        cursor: pointer;
    }
`