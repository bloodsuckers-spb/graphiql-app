import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { FormEvent, useRef } from 'react';

import { AuthForm, FormBtn, UserAuthField, FormInput } from 'shared/ui';

export const LoginForm = () => {
  const handleLogin = async () => {
    const email = '';
    const password = 'string';
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      return false;
    }
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <AuthForm onSubmit={onSubmit}>
      <UserAuthField>
        <FormInput type="email" />
      </UserAuthField>
      <UserAuthField>
        <FormInput type="password" />
      </UserAuthField>
      <FormBtn />
    </AuthForm>
  );
};
