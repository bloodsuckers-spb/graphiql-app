/* eslint-disable import/no-default-export */
import { Extension } from '@codemirror/state';
import CodeMirror from '@uiw/react-codemirror';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import { extensions } from 'shared/ui/editor/settings/extensions';

import styles from './EditorCode.module.scss';

type Props = {
  theme: 'light' | 'dark' | 'none' | Extension | undefined;
  type: 'request' | 'response' | 'variables';
  value: string;
  onChange: ((requestValue: string) => void) | undefined;
};

const EditorCode = ({ theme, type, value, onChange }: Props) => {
  const schema = useAppSelector((state) => state.editorReducer.schema);
  console.log(schema);
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
        extensions={extensions(schema)}
        onChange={onChange}
        editable={type === 'request' || type === 'variables'}
      />
    </div>
  );
};

export default EditorCode;
