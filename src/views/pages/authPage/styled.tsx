import styled from 'styled-components';

export const PageWrapper = styled.section`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #110e1f;
  }
`;

export const Container = styled.div`
  & {
    width: fit-content;
    height: fit-content;
    padding: 2rem 3rem;
    background-color: #1b1730;
    border-radius: 12px;
  }
`;

export const AuthFormTitle = styled.span`
  & {
    color: white;
    font-family: 'Montserrat';
    font-size: 1.5rem;
  }
`;

export const CustomForm = styled.form`
  & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

interface ICustomInputLabel {
  column?: boolean;
  align?: boolean;
}

export const CustomInputLabel = styled.label<ICustomInputLabel>`
  & {
    display: flex;
    flex-direction: ${(props) => {
      return props.column ? 'column' : 'row';
    }};
    align-self: ${(props) => {
      return props.align ? 'center' : 'flex-start';
    }};
  }
`;

export const InputTitleText = styled.span`
  & {
    color: white;
    font-weight: 500;
    font-family: 'Montserrat';
    user-select: none;
    align-self: center;
  }
`;

export const CustomInput = styled.input`
  & {
    border-radius: 0.5rem;
    padding: 0.5rem;
    outline: 0px;
    background-color: #492a57;
    border: 1px solid #0c0911;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    align-self: center;
    transition: 0.2s;
  }
  &:focus {
    background-color: #9052ad;
  }
`;

export const ErrorText = styled.span`
  & {
    color: red;
    font-family: 'Montserrat';
    font-size: 14px;
  }
`;

export const CustomButton = styled.button`
  & {
    background-color: #492a57;
    padding: 0.8rem;
    font-size: 16px;
    user-select: none;
    color: white;
    font-weight: 600;
    font-family: 'Montserrat';
    text-transform: uppercase;
    border-radius: 1rem;
    border: none;
    transition: 0.2s;
  }
  &:disabled {
    background-color: #181321;
  }
  &:not(:disabled):hover {
    background-color: #9052ad;
    cursor: pointer;
  }
`;
