/* eslint-disable import/no-default-export */
import { Extension } from '@codemirror/state';
import CodeMirror from '@uiw/react-codemirror';
import { editorSlice } from 'app/providers/StoreProvider/config/reducers';
import { useState, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import styles from './EditorCode.module.scss';

type Props = {
  theme: 'light' | 'dark' | 'none' | Extension | undefined;
  extensions: Extension[];
  type: 'request' | 'response';
  value: string;
};

const EditorCode = ({ theme, extensions, type, value }: Props) => {
  const dispatch = useAppDispatch();
  const requestString = useAppSelector((state) => state.editorReducer.request);

  const [requestValue, setRequestValue] = useState(requestString ?? '');

  const onChange = useCallback((requestValue: string) => {
    setRequestValue(requestValue);
  }, []);

  useEffect(() => {
    dispatch(editorSlice.actions.setRequest(requestValue));
  }, [dispatch, requestValue]);

  return (
    <div
      className={[
        styles.wrapper,
        `${type === 'request' ? styles.wrapperReq : styles.wrapperRes}`,
      ].join(' ')}
    >
      <CodeMirror
        value={value}
        height="100%"
        width="100%"
        theme={theme}
        extensions={extensions}
        onChange={onChange}
        editable={type === 'request'}
      />
    </div>
  );
};

export default EditorCode;
