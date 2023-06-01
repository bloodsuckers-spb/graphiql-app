import { langs } from '@uiw/codemirror-extensions-langs';

import { tokyoNight } from '@uiw/codemirror-themes-all';

import CodeMirror from '@uiw/react-codemirror';

import { useAppSelector } from 'shared/hooks';

import styles from './ResponseOutput.module.scss';

type Props = {
  isError: boolean;
};

export const ResponseOutput = ({ isError }: Props) => {
  const responseString = useAppSelector(
    (state) => state.editorReducer.response
  );

  const errorMessage = `{
    "error": "Unexpected end of JSON input"
  }`;

  return (
    <div className={styles.responseOutput}>
      <CodeMirror
        value={isError ? errorMessage : responseString}
        extensions={[langs.json()]}
        theme={tokyoNight}
        editable={false}
        height="100%"
        width="100%"
      />
    </div>
  );
};
