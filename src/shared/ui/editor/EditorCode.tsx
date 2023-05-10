/* eslint-disable import/no-default-export */
import { Extension } from '@codemirror/state';
import CodeMirror from '@uiw/react-codemirror';
import { useState, useCallback } from 'react';
import { classNames } from 'shared/libs';

import styles from './EditorCode.module.scss';

type Props = {
  theme: 'light' | 'dark' | 'none' | Extension | undefined;
  extensions: Extension[];
  type: 'request' | 'response';
};

const EditorCode = ({ theme, extensions, type }: Props) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);

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
