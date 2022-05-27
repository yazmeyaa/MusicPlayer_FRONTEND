import styled from 'styled-components';

export const Container = styled.div`
  & {
    box-sizing: border-box;
    border: 0px;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    border-top: 4px black;
    border-style: ridge;
    user-select: none;
    background: rgb(8, 0, 34);
    background: linear-gradient(0deg, rgba(8, 0, 34, 1) 0%, rgba(15, 0, 59, 1) 100%);
  }
`;

export const SubContainer = styled.div`
  & {
    box-sizing: border-box;
    display: flex;
    width: 100%;
  }
`;
