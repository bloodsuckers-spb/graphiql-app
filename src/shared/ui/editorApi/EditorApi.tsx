import {
  editorSlice,
  useGetSchemaQuery,
} from 'app/providers/StoreProvider/config/reducers';
import { buildClientSchema } from 'graphql';
import { FormEvent, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import styles from './EditorApi.module.scss';

export const EditorApi = () => {
  const dispatch = useAppDispatch();

  const storeApiURL = useAppSelector((state) => state.editorReducer.apiURL);

  const inputURL = useRef<HTMLInputElement>(null);

  const { data } = useGetSchemaQuery(storeApiURL);

  useEffect(() => {
    if (data) {
      const schema = buildClientSchema(data.data);
      dispatch(editorSlice.actions.setSchema(schema));
    }
  }, [data, dispatch]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (inputURL.current) {
      dispatch(editorSlice.actions.setApiURL(inputURL.current.value));
    }
  };

  const resetValue = (e: FormEvent) => {
    e.preventDefault();
    if (inputURL.current) {
      inputURL.current.value = '';
      dispatch(editorSlice.actions.setApiURL(inputURL.current.value));
    }
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
