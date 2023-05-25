import styles from './FormBtn.module.scss';

type Props = {
  isDisabled: boolean;
};

export const FormBtn = ({ isDisabled }: Props) => {
  return (
    <button
      className={styles.btn}
      type="submit"
      disabled={isDisabled}
    >
      Enter
    </button>
  );
};
