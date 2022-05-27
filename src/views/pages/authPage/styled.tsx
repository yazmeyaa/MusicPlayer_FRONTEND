import styled from 'styled-components';

export const Container = styled.div`
  & {
    padding: 1rem 2rem;
    background-color: #1b1730;
  }
`;

export const AuthFormTitle = styled.span`
  & {
    font-family: 'Montserrat';
    font-size: 1.5rem;
  }
`;

export const CustomForm = styled.form`
  & {
    display: flex;
    flex-direction: column;
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
    font-family: 'Montserrat';
    user-select: none;
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
  }
`;
