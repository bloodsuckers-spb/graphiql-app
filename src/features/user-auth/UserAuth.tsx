import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { AppLogo } from 'shared/ui';

import styles from './UserAuth.module.scss';

import { UserAuthForm } from '..';

export const UserAuth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const { t } = useTranslation();

  const changeFormType = () => setIsSignUp((isSignUp) => !isSignUp);

  return (
    <div className={styles.userAuth}>
      <div className={styles.userAuthHeading}>
        <AppLogo />
        <div className={styles.userAuthHeader}>
          <div className={styles.userAuthRadios}>
            <input
              className={styles.userAuthRadio}
              id="radio-login"
              type="radio"
              name="user-auth"
              value={`${t('formLogIn')}`}
              defaultChecked
              onClick={changeFormType}
            />
            <label
              className={styles.userAuthLabel}
              htmlFor="radio-login"
            >
              {t('formLogIn')}
            </label>
            <input
              className={styles.userAuthRadio}
              id="radio-signup"
              type="radio"
              name="user-auth"
              value={`${t('formSignUp')}`}
              onClick={changeFormType}
            />
            <label
              className={styles.userAuthLabel}
              htmlFor="radio-signup"
            >
              {t('formSignUp')}
            </label>
          </div>
        </div>
      </div>
      <UserAuthForm isSignUp={isSignUp} />
    </div>
  );
};
