import { editorSlice } from 'app/providers/StoreProvider/config/reducers';
import { GraphQLSchema } from 'graphql';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from 'shared/hooks';

import styles from './EditorApi.module.scss';

import type { EditorProps } from 'app/types';

export const EditorApi = ({ storeApiURL }: EditorProps) => {
  const dispatch = useAppDispatch();
  const [inputURL, setInputURL] = useState(storeApiURL);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputURL) dispatch(editorSlice.actions.setApiURL(inputURL));
  };

  const resetValue = (e: FormEvent) => {
    e.preventDefault();
    setInputURL('');
    dispatch(editorSlice.actions.setApiURL(''));
    dispatch(editorSlice.actions.setSchema(new GraphQLSchema({})));
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
          value={inputURL}
          onChange={(e) => setInputURL(e.target.value)}
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
