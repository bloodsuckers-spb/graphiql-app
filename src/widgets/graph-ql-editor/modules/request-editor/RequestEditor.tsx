import CodeMirror from '@uiw/react-codemirror';
import { editorSlice } from 'app/providers/StoreProvider/config/reducers';

import { buildClientSchema } from 'graphql';
import { useEffect, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from 'shared/hooks';

import { extensions } from 'shared/ui/editor/settings/extensions';
import { reqTheme } from 'shared/ui/editor/settings/themes';

import styles from './RequestEditor.module.scss';

import type { ResponseData } from 'app/types';

type Props = {
  data?: ResponseData;
  editable: boolean;
};

export const RequestEditor = ({ data, editable }: Props) => {
  const { setRequest } = editorSlice.actions;
  const requestString = useAppSelector((state) => state.editorReducer.request);
  const dispatch = useAppDispatch();

  const schema = useMemo(
    () => (data ? extensions(buildClientSchema(data.data)) : []),
    [data]
  );

  const onChange = (requestValue: string) => {
    dispatch(setRequest(requestValue));
  };

  useEffect(() => {
    const { setSchema } = editorSlice.actions;
    dispatch(setSchema(schema));
  }, [schema, dispatch]);

  return (
    <div className={styles.requestEditor}>
      <CodeMirror
        value={requestString}
        theme={reqTheme}
        extensions={schema}
        onChange={onChange}
        editable={editable}
        height="100%"
        width="100%"
      />
    </div>
  );
};
