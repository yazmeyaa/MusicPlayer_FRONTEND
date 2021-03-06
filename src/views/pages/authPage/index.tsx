import { useForm, FieldErrors, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import {
  Container,
  CustomForm,
  CustomInput,
  ErrorText,
  CustomButton,
  CustomInputLabel,
  AuthFormTitle,
  InputTitleText,
  PageWrapper,
} from './styled';
import { useRequest } from 'hooks/useRequest';
import { appConfig } from 'config/appConfig';
import { useActions } from 'hooks/useActions';

interface FormValues {
  username: string;
  password: string;
  rememberMe: string;
}

export const AuthPage = () => {
  const { loading, request, error: requestError } = useRequest();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    mode: 'onTouched',
  });
  const { setJWT } = useActions();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    request({
      URL: `${appConfig.backendUrl}/api/auth`,
      method: 'POST',
      data: {
        username: data.username,
        password: data.password,
      },
    }).then((response) => {
      if (response && response.status === 200) {
        setJWT(response.data);
      }
    });
    reset();
  };

  const onError: SubmitErrorHandler<FieldErrors> = (error) => {
    alert(error);
  };

  return (
    <PageWrapper>
      <Container>
        <CustomForm onSubmit={handleSubmit(onSubmit, onError)}>
          <AuthFormTitle>Register</AuthFormTitle>
          <CustomInputLabel column align>
            <InputTitleText>Username</InputTitleText>
            <CustomInput
              {...register('username', {
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username cant be less then 3 symbols',
                },
                maxLength: {
                  value: 36,
                  message: 'Username cannot be described 36 characters',
                },
              })}
              autoComplete="off"
            />
            <br />
            {(errors || requestError) && <ErrorText> {errors.username?.message} </ErrorText>}
          </CustomInputLabel>
          <CustomInputLabel column align>
            <InputTitleText>Password</InputTitleText>
            <CustomInput
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password cant be less then 8 symbols',
                },
                maxLength: {
                  value: 64,
                  message: 'Password cannot be described 36 characters',
                },
              })}
              type="password"
            />
            <br />
            {(errors || requestError) && <ErrorText> {errors.password?.message} </ErrorText>}
          </CustomInputLabel>

          <CustomInputLabel>
            <input type="checkbox" {...register('rememberMe', {})} />
            <InputTitleText>Remember me </InputTitleText>
          </CustomInputLabel>

          <CustomButton type="submit" disabled={!isValid || loading}>
            register
          </CustomButton>
        </CustomForm>
      </Container>
    </PageWrapper>
  );
};
