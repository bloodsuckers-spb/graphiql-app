import { AuthForm, FormBtn, UserAuthField, FormInput } from 'shared/ui';

export const LoginForm = () => (
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
