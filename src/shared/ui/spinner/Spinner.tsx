import { CircularProgress } from '@mui/material';

import styles from './Spiner.module.scss';

export const Spinner = () => <CircularProgress className={styles.spin} />;
