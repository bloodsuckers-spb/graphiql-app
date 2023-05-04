import { AuthForm, UserAuthField, FormBtn, FormInput } from 'shared/ui';

export const SignInForm = () => (
  <AuthForm>
    <UserAuthField>
      <FormInput type="email" />
    </UserAuthField>
    <UserAuthField>
      <FormInput type="password" />
    </UserAuthField>
    <FormBtn />
  </AuthForm>
);
