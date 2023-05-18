import {
  editorSlice,
  useGetSchemaQuery,
} from 'app/providers/StoreProvider/config/reducers';

import { buildClientSchema } from 'graphql';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import { Spinner, Wrapper } from 'shared/ui';

import { EditorApi } from 'shared/ui/editorApi/EditorApi';
import EditorControls from 'shared/ui/editorControls/EditorControls';

import { defaultSchema } from './constants';

import styles from './GraphQlEditor.module.scss';

import {
  EditorMenu,
  RequestEditor,
  ResponseOutput,
  VariablesEditor,
} from './modules';

export const GraphQlEditor = () => {
  const dispatch = useAppDispatch();
  const storeApiURL = useAppSelector((state) => state.editorReducer.apiURL);

  const { data, error, isFetching } = useGetSchemaQuery(storeApiURL);

  useEffect(() => {
    const { setSchema } = editorSlice.actions;
    dispatch(
      setSchema(error || !data ? defaultSchema : buildClientSchema(data.data))
    );
  }, [error, data, dispatch]);

  return (
    <Wrapper className={styles.innerEditor}>
      <EditorMenu />
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
              <ResponseOutput />
            </div>
            <div className={styles.variables}>
              <VariablesEditor />
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};
