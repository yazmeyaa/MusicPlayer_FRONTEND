import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  & {
    display: flex;
    gap: 1rem;
    position: relative;
    left: 50%;
    transform: translate(-50%, -10%);
  }
`;

export const SingleButton = styled.button`
  & {
    box-sizing: border-box;
    justify-self: center;
    align-self: center;
    background-color: #240090;
    border: none;
    font-size: 24px;
    font-weight: 300;
    border: 1px solid #190061;
    transition: 0.2s;
    border-radius: 0.5rem;
    cursor: pointer;
    color: rgb(232, 232, 332);
    padding: 0.5rem 1rem;
  }
  &:hover {
    background-color: #3500d3;
    border: 1px solid transparent;
    box-shadow: 0px 0px 4px 4px #3c00ee44;
    color: white;
  }
`;

export const ButtonIcons = styled.img`
  & {
    object-fit: cover;
    width: 1rem;
    height: auto;
  }
`;
