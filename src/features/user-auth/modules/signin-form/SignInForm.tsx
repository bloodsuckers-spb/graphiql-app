import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FormEvent, useRef } from 'react';

import { AuthForm, UserAuthField, FormBtn, FormInput } from 'shared/ui';

export const SignInForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSignIn = async () => {
    const email = emailRef.current?.value ?? '';
    const password = passwordRef.current?.value ?? '';
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(auth);
      return true;
    } catch (error) {
      return false;
    }
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSignIn();
  };

  return (
    <AuthForm onSubmit={onSubmit}>
      <UserAuthField>
        <FormInput
          type="email"
          ref={emailRef}
        />
      </UserAuthField>
      <UserAuthField>
        <FormInput
          type="password"
          ref={passwordRef}
        />
      </UserAuthField>
      <FormBtn />
    </AuthForm>
  );
};
