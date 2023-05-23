import { langs } from '@uiw/codemirror-extensions-langs';
import { tokyoNight } from '@uiw/codemirror-themes-all';
import CodeMirror from '@uiw/react-codemirror';

import { editorSlice } from 'app/providers/StoreProvider/config/reducers';

import { useAppDispatch, useAppSelector } from 'shared/hooks';

import styles from './OptionsEditor.module.scss';

type Props = {
  type: 'variables' | 'headers' | null;
};

export const OptionsEditor = ({ type }: Props) => {
  const dispatch = useAppDispatch();
  const { setVariables, setHeaders } = editorSlice.actions;
  const variablesString = useAppSelector(
    (state) => state.editorReducer.variables
  );

  const headersString = useAppSelector((state) => state.editorReducer.headers);

  const onChange = (requestValue: string) => {
    type === 'variables'
      ? dispatch(setVariables(requestValue))
      : dispatch(setHeaders(requestValue));
  };

  return (
    <div className={styles.optionsEditor}>
      <CodeMirror
        extensions={[langs.json()]}
        value={type === 'variables' ? variablesString : headersString}
        theme={tokyoNight}
        onChange={onChange}
        editable={true}
        height="100%"
        width="100%"
      />
    </div>
  );
};
