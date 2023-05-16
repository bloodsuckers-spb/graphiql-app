/* eslint-disable import/no-default-export */
import { Extension } from '@codemirror/state';
import CodeMirror from '@uiw/react-codemirror';

import styles from './EditorCode.module.scss';

type Props = {
  theme: 'light' | 'dark' | 'none' | Extension | undefined;
  extensions: Extension[];
  type: 'request' | 'response' | 'variables';
  value: string;
  onChange: ((requestValue: string) => void) | undefined;
};

const EditorCode = ({ theme, extensions, type, value, onChange }: Props) => {
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
        editable={type === 'request' || type === 'variables'}
      />
    </div>
  );
};

export default EditorCode;
