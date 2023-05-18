import { langs } from '@uiw/codemirror-extensions-langs';
import { tokyoNight } from '@uiw/codemirror-themes-all';
import CodeMirror from '@uiw/react-codemirror';

import { editorSlice } from 'app/providers/StoreProvider/config/reducers';

import { useAppDispatch, useAppSelector } from 'shared/hooks';

import styles from './VariablesEditor.module.scss';

export const VariablesEditor = () => {
  const dispatch = useAppDispatch();
  const { setVariables } = editorSlice.actions;
  const variablesString = useAppSelector(
    (state) => state.editorReducer.variables
  );

  const onChange = (requestValue: string) => {
    dispatch(setVariables(requestValue));
  };

  return (
    <div className={styles.variablesEditor}>
      <CodeMirror
        extensions={[langs.json()]}
        value={variablesString}
        theme={tokyoNight}
        onChange={onChange}
        editable={true}
        height="100%"
        width="100%"
      />
    </div>
  );
};
