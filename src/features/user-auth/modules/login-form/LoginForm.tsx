import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { AuthForm, FormBtn, UserAuthField, FormInput } from 'shared/ui';

export const LoginForm = () => {
  const handleLogin = async (email: string, password: string) => {
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

  return (
    <AuthForm>
      <UserAuthField>
        <FormInput type="email" />
      </UserAuthField>
      <UserAuthField>
        <FormInput type="password" />
      </UserAuthField>
      <FormBtn handleClick={handleLogin} />
    </AuthForm>
  );
};
