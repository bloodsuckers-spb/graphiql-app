import CodeMirror from '@uiw/react-codemirror';

import { useAppSelector } from 'shared/hooks';

import { resTheme } from 'shared/ui/editor/settings/themes';

import styles from './ResponseOutput.module.scss';

export const ResponseOutput = () => {
  const responseString = useAppSelector(
    (state) => state.editorReducer.response
  );

  return (
    <div className={styles.responseOutput}>
      <CodeMirror
        value={responseString}
        theme={resTheme}
        editable={false}
        height="100%"
        width="100%"
      />
    </div>
  );
};
