import { editorSlice } from 'app/providers/StoreProvider/config/reducers';
import { FormEvent, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import styles from './EditorSearchBar.module.scss';

type Props = {
  isError: boolean;
};

export const EditorSearchBar = ({ isError }: Props) => {
  const dispatch = useAppDispatch();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const storeApiURL = useAppSelector((state) => state.editorReducer.apiURL);
  const { t } = useTranslation();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!searchInputRef.current) return;
    const { value } = searchInputRef.current;
    const { setApiURL } = editorSlice.actions;
    dispatch(setApiURL(value));
  };

  return (
    <div className={styles.serchBar}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          ref={searchInputRef}
          defaultValue={storeApiURL}
          onBlur={handleSubmit}
          type="text"
          placeholder={`${t('apiPlaceholder')}`}
          onChange={handleSubmit}
        />
      </div>
      {isError && <p className={styles.error}>{t('apiUrlError')}</p>}
    </div>
  );
};
