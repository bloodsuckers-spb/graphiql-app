/* eslint-disable import/no-default-export */
import { editorSlice } from 'app/providers/StoreProvider/config/reducers';
import { ChangeEvent, useState, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import styles from './EditorApi.module.scss';

const EditorApi = () => {
  const dispatch = useAppDispatch();

  const storeApiURL = useAppSelector((state) => state.editorReducer.apiURL);

  const [apiURL, setApiURL] = useState(storeApiURL ?? '');

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event?.target.value;
    setApiURL(value);
  };

  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editorSlice.actions.setApiURL(apiURL));
  };

  const restValue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setApiURL('');
  };

  return (
    <form
      action=""
      className={styles.form}
      onSubmit={(event) => handelSubmit(event)}
      onReset={(event) => restValue(event)}
    >
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="api"
          value={apiURL}
          className={styles.input}
          onChange={handelChange}
        />
        <button
          type="reset"
          className={styles.close}
          aria-label="erase text"
        >
          <svg className={styles.closeIcon}>
            <use href="sprite.svg#close"></use>
          </svg>
        </button>
      </div>
      <button
        type="submit"
        className={styles.submit}
      >
        send
      </button>
    </form>
  );
};

export default EditorApi;
