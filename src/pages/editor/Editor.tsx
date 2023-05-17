/* eslint-disable import/no-default-export */
import { auth } from 'app/firebase';

import {
  editorSlice,
  useGetSchemaQuery,
} from 'app/providers/StoreProvider/config/reducers';

import { EditorApiDocs } from 'features';

import { buildClientSchema } from 'graphql';

import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import { Spinner, Wrapper } from 'shared/ui';

import EditorCode from 'shared/ui/editor/EditorCode';
import {
  reqTheme,
  resTheme,
  varsTheme,
} from 'shared/ui/editor/settings/themes';

import { EditorApi } from 'shared/ui/editorApi/EditorApi';
import EditorControls from 'shared/ui/editorControls/EditorControls';

import { defaultSchema } from './constants';

import styles from './Editor.module.scss';

const Editor = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const dispatch = useAppDispatch();

  const requestString = useAppSelector((state) => state.editorReducer.request);
  const responseString = useAppSelector(
    (state) => state.editorReducer.response
  );
  const variablesString = useAppSelector(
    (state) => state.editorReducer.variables
  );
  const storeApiURL = useAppSelector((state) => state.editorReducer.apiURL);

  const { data, error, isFetching } = useGetSchemaQuery(storeApiURL);

  const [requestValue, setRequestValue] = useState(requestString);
  const [variablesValue, setVariabllesValue] = useState(variablesString);

  const handleRequest = useCallback((requestValue: string) => {
    setRequestValue(requestValue);
  }, []);

  const handleVariables = useCallback((requestValue: string) => {
    setVariabllesValue(requestValue);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  useEffect(() => {
    const { setSchema } = editorSlice.actions;
    dispatch(
      setSchema(error || !data ? defaultSchema : buildClientSchema(data.data))
    );
  }, [error, data, dispatch]);

  useEffect(() => {
    const { setRequest, setVariables } = editorSlice.actions;
    dispatch(setRequest(requestValue));
    dispatch(setVariables(variablesValue));
  }, [dispatch, requestValue, variablesValue]);

  return (
    <Wrapper className={styles.innerEditor}>
      {data && <EditorApiDocs />}
      <EditorApi storeApiURL={storeApiURL} />
      <div className={styles.wrapper}>
        {isFetching ? (
          <Spinner />
        ) : (
          <>
            <div className={styles.content}>
              <div className={styles.playGround}>
                <EditorCode
                  type="request"
                  theme={reqTheme}
                  value={requestString}
                  onChange={handleRequest}
                />
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

export default Editor;
