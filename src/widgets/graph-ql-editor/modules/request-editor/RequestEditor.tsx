import CodeMirror from '@uiw/react-codemirror';
import { editorSlice } from 'app/providers/StoreProvider/config/reducers';

import { useAppSelector, useAppDispatch } from 'shared/hooks';

import { extensions } from 'shared/ui/editor/settings/extensions';
import { reqTheme } from 'shared/ui/editor/settings/themes';

import styles from './RequestEditor.module.scss';

export const RequestEditor = () => {
  const schema = useAppSelector((state) => state.editorReducer.schema);
  const { setRequest } = editorSlice.actions;
  const requestString = useAppSelector((state) => state.editorReducer.request);

  const dispatch = useAppDispatch();

  const onChange = (requestValue: string) => {
    dispatch(setRequest(requestValue));
  };

  return (
    <div className={styles.requestEditor}>
      <CodeMirror
        value={requestString}
        theme={reqTheme}
        extensions={extensions(schema)}
        onChange={onChange}
        editable={true}
        height="100%"
        width="100%"
      />
    </div>
  );
};
