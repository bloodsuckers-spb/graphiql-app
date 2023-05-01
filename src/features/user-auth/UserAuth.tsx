import { Form, Input, Button } from 'antd';
import { FormItem, AppLogo } from 'shared/ui';

import styles from './UserAuth.module.scss';

enum UsersAuth {
  LOGIN = 'Log In',
  SIGNUP = 'Sign Up',
}

export const UserAuth = () => {
  const onClick = () => console.log('click');

  return (
    <Form className={styles.form}>
      <AppLogo />
      <div className={styles.formContent}>
        <FormItem>
          <div className={styles.radioGroup}>
            <input
              className={styles.radio}
              id="radio-login"
              type="radio"
              name="user-auth"
              value={UsersAuth.LOGIN}
              defaultChecked
            />
            <label
              className={styles.radioLabel}
              htmlFor="radio-login"
            >
              {UsersAuth.LOGIN}
            </label>
            <input
              className={styles.radio}
              id="radio-signup"
              type="radio"
              name="user-auth"
              value={UsersAuth.SIGNUP}
            />
            <label
              className={styles.radioLabel}
              htmlFor="radio-signup"
            >
              {UsersAuth.SIGNUP}
            </label>
          </div>
        </FormItem>
        <FormItem>
          <Input
            type="email"
            className={styles.textField}
          />
        </FormItem>
        <FormItem>
          <Input
            type="password"
            className={styles.textField}
          />
        </FormItem>
        <Button
          className={styles.btn}
          onClick={onClick}
        >
          Enter
        </Button>
      </div>
    </Form>
  );
};
