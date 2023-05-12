/* eslint-disable import/no-default-export */
import { editorSlice } from 'app/providers/StoreProvider/config/reducers';
import { getRemoteSchema } from 'entities/schema';
import { ChangeEvent, useState, FormEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import styles from './EditorApi.module.scss';

const EditorApi = () => {
  const dispatch = useAppDispatch();

  const storeApiURL = useAppSelector((state) => state.editorReducer.apiURL);

  const apiURL = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event?.target.value;
    dispatch(editorSlice.actions.setApiURL(value));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (apiURL.current) {
      dispatch(editorSlice.actions.setApiURL(apiURL.current.value));
    }
    const schema = await getRemoteSchema(storeApiURL);
    dispatch(editorSlice.actions.setSchema(schema));
  };

  const restValue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editorSlice.actions.setApiURL(''));
  };

  return (
    <form
      action=""
      className={styles.form}
      onSubmit={(event) => handleSubmit(event)}
      onReset={(event) => restValue(event)}
    >
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="api"
          value={storeApiURL}
          ref={apiURL}
          className={styles.input}
          onChange={handleChange}
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
