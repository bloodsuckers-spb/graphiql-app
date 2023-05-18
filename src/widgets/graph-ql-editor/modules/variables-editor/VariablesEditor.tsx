import CodeMirror from '@uiw/react-codemirror';

import { editorSlice } from 'app/providers/StoreProvider/config/reducers';

import { useAppDispatch, useAppSelector } from 'shared/hooks';

import { varsTheme } from 'shared/ui/editor/settings/themes';

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
        value={variablesString}
        theme={varsTheme}
        onChange={onChange}
        editable={true}
        height="100%"
        width="100%"
      />
    </div>
  );
};
