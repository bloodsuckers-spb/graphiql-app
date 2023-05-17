import { editorSlice } from 'app/providers/StoreProvider/config/reducers';
import { FormEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { defaultSchema } from 'widgets/graph-ql-editor/constants';

import styles from './EditorApi.module.scss';

// import type { EditorProps } from 'app/types';

export const EditorApi = () => {
  const dispatch = useAppDispatch();
  const { setSchema } = editorSlice.actions;
  const searchInputRef = useRef<HTMLInputElement>(null);
  const storeApiURL = useAppSelector((state) => state.editorReducer.apiURL);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!searchInputRef.current) return;
    const { value } = searchInputRef.current;
    const { setApiURL } = editorSlice.actions;
    dispatch(setApiURL(value));
  };

  const resetValue = (event: FormEvent) => {
    event.preventDefault();
    const { setApiURL } = editorSlice.actions;
    setSchema(defaultSchema);
    dispatch(setApiURL(''));
  };

  return (
    <form
      className={styles.form}
      onReset={resetValue}
      onSubmit={handleSubmit}
    >
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          ref={searchInputRef}
          defaultValue={storeApiURL}
          onBlur={handleSubmit}
          type="text"
          placeholder="Please enter API url"
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
