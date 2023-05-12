/* eslint-disable import/no-default-export */
import { editorSlice } from 'app/providers/StoreProvider/config/reducers';
import { getRemoteSchema } from 'entities/schema';
import { FormEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import styles from './EditorApi.module.scss';

const EditorApi = () => {
  const dispatch = useAppDispatch();

  const storeApiURL = useAppSelector((state) => state.editorReducer.apiURL);

  const inputURL = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (inputURL.current) {
      dispatch(editorSlice.actions.setApiURL(inputURL.current.value));
    }
    const schema = await getRemoteSchema(storeApiURL);
    dispatch(editorSlice.actions.setSchema(schema));
  };

  const resetValue = (e: FormEvent) => {
    e.preventDefault();
    if (inputURL.current) {
      inputURL.current.value = '';
    }
    dispatch(editorSlice.actions.setApiURL(''));
  };

  return (
    <form
      action=""
      className={styles.form}
      onReset={(event) => resetValue(event)}
    >
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="api"
          defaultValue={storeApiURL}
          ref={inputURL}
          onBlur={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
          className={styles.input}
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
    </form>
  );
};

export default EditorApi;
