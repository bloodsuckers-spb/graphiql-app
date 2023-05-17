import {
  editorSlice,
  useGetSchemaQuery,
} from 'app/providers/StoreProvider/config/reducers';

import { buildClientSchema } from 'graphql';

import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import { Spinner, Wrapper } from 'shared/ui';

import EditorCode from 'shared/ui/editor/EditorCode';
import { resTheme, varsTheme } from 'shared/ui/editor/settings/themes';

import { EditorApi } from 'shared/ui/editorApi/EditorApi';
import EditorControls from 'shared/ui/editorControls/EditorControls';

import { defaultSchema } from './constants';

import styles from './GraphQlEditor.module.scss';

import { EditorApiDocs, RequestEditor } from './modules';

export const GraphQlEditor = () => {
  const dispatch = useAppDispatch();

  const responseString = useAppSelector(
    (state) => state.editorReducer.response
  );
  const variablesString = useAppSelector(
    (state) => state.editorReducer.variables
  );
  const storeApiURL = useAppSelector((state) => state.editorReducer.apiURL);

  const { data, error, isFetching } = useGetSchemaQuery(storeApiURL);

  const [variablesValue, setVariabllesValue] = useState(variablesString);

  const handleVariables = useCallback((requestValue: string) => {
    setVariabllesValue(requestValue);
  }, []);

  useEffect(() => {
    const { setSchema } = editorSlice.actions;
    dispatch(
      setSchema(error || !data ? defaultSchema : buildClientSchema(data.data))
    );
  }, [error, data, dispatch]);

  useEffect(() => {
    const { setVariables } = editorSlice.actions;
    dispatch(setVariables(variablesValue));
  }, [dispatch, variablesValue]);

  return (
    <Wrapper className={styles.innerEditor}>
      {data && <EditorApiDocs />}
      <EditorApi />
      <div className={styles.wrapper}>
        {isFetching ? (
          <Spinner />
        ) : (
          <>
            <div className={styles.content}>
              <div className={styles.playGround}>
                <RequestEditor />
                <EditorControls />
              </div>
              <EditorCode
                theme={resTheme}
                type="response"
                value={responseString}
                onChange={undefined}
              />
            </div>
            <div className={styles.variables}>
              <EditorCode
                theme={varsTheme}
                type="variables"
                value={variablesValue}
                onChange={handleVariables}
              />
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};
