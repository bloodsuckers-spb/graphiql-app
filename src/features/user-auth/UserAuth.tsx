import { Form, Input, Button } from 'antd';
import { FormItem } from 'shared/ui';

import styles from './UserAuth.module.scss';

enum UsersAuth {
  LOGIN = 'Log In',
  SIGNUP = 'Sign Up',
}

export const UserAuth = () => (
  <>
    <Form className={styles.form}>
      <svg className={styles.logo}>
        <use href="sprite.svg#logo"></use>
      </svg>
      <div className={styles.formContent}>
        <FormItem>
          <div className={styles.radioGroup}>
            <input
              id="radio-login"
              type="radio"
              name="user-auth"
              value={UsersAuth.LOGIN}
              className={styles.radio}
              defaultChecked
            />
            <label htmlFor="radio-login">{UsersAuth.LOGIN}</label>
            <input
              id="radio-signup"
              type="radio"
              name="user-auth"
              value={UsersAuth.SIGNUP}
            />
            <label htmlFor="radio-signup">{UsersAuth.SIGNUP}</label>
          </div>
        </FormItem>
        <FormItem>
          <Input
            type="email"
            className={styles.formInput}
          />
        </FormItem>
        <FormItem>
          <Input
            type="password"
            className={styles.formInput}
          />
        </FormItem>
        <Button className={styles.btn}>Enter</Button>
      </div>
    </Form>
  </>
);
