/* eslint-disable import/no-default-export */
import { auth } from 'app/firebase';
import {
  editorSlice,
  useLazyGetSchemaQuery,
} from 'app/providers/StoreProvider/config/reducers';
import { EditorApiDocs } from 'features';
import { buildClientSchema } from 'graphql';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { Spinner, Wrapper } from 'shared/ui';
import EditorCode from 'shared/ui/editor/EditorCode';
import { extensions } from 'shared/ui/editor/settings/extensions';
import {
  reqTheme,
  resTheme,
  varsTheme,
} from 'shared/ui/editor/settings/themes';
import { EditorApi } from 'shared/ui/editorApi/EditorApi';
import EditorControls from 'shared/ui/editorControls/EditorControls';

import styles from './Editor.module.scss';

const Editor = () => {
  const dispatch = useAppDispatch();
  const requestString = useAppSelector((state) => state.editorReducer.request);
  const responseString = useAppSelector(
    (state) => state.editorReducer.response
  );
  const variablesString = useAppSelector(
    (state) => state.editorReducer.variables
  );
  const storeApiURL = useAppSelector((state) => state.editorReducer.apiURL);
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [trigger, results] = useLazyGetSchemaQuery();
  const { isUninitialized, data, isFetching } = results;

  const [requestValue, setRequestValue] = useState(requestString);
  const [variablesValue, setVariabllesValue] = useState(variablesString);

  const handleRequest = useCallback((requestValue: string) => {
    setRequestValue(requestValue);
  }, []);

  const handleVariables = useCallback((requestValue: string) => {
    setVariabllesValue(requestValue);
  }, []);

  useEffect(() => {
    dispatch(editorSlice.actions.setRequest(requestValue));
    dispatch(editorSlice.actions.setVariables(variablesValue));
  }, [dispatch, requestValue, variablesValue]);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (!storeApiURL) return;
    trigger(storeApiURL);
  }, [storeApiURL, trigger]);

  return (
    <Wrapper className={styles.innerEditor}>
      {!isUninitialized && <EditorApiDocs />}
      <EditorApi storeApiURL={storeApiURL} />
      <div className={styles.wrapper}>
        {isFetching ? (
          <Spinner />
        ) : (
          <>
            <div className={styles.content}>
              <div className={styles.playGround}>
                <EditorCode
                  theme={reqTheme}
                  extensions={
                    data ? extensions(buildClientSchema(data.data)) : []
                  }
                  type="request"
                  value={requestString}
                  onChange={handleRequest}
                />
                <EditorControls />
              </div>
              <EditorCode
                theme={resTheme}
                extensions={[]}
                type="response"
                value={responseString}
                onChange={undefined}
              />
            </div>
            <div className={styles.variables}>
              <EditorCode
                theme={varsTheme}
                extensions={[]}
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
