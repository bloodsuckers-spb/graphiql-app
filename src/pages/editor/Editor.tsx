/* eslint-disable import/no-default-export */
import { auth } from 'app/firebase';
import { useLazyGetSchemaQuery } from 'app/providers/StoreProvider/config/reducers';
import { EditorApiDocs } from 'features';
import { buildClientSchema } from 'graphql';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'shared/hooks';
import { Spinner, Wrapper } from 'shared/ui';
import EditorCode from 'shared/ui/editor/EditorCode';
import { extensions } from 'shared/ui/editor/settings/extensions';
import { reqTheme, resTheme } from 'shared/ui/editor/settings/themes';
import { EditorApi } from 'shared/ui/editorApi/EditorApi';
import EditorControls from 'shared/ui/editorControls/EditorControls';

import styles from './Editor.module.scss';

const Editor = () => {
  const requestString = useAppSelector((state) => state.editorReducer.request);
  const responseString = useAppSelector(
    (state) => state.editorReducer.response
  );
  const storeApiURL = useAppSelector((state) => state.editorReducer.apiURL);
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [trigger, results] = useLazyGetSchemaQuery();
  const { isUninitialized, data, isFetching } = results;

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
          <div className={styles.content}>
            <div className={styles.playGround}>
              <EditorCode
                theme={reqTheme}
                extensions={
                  data ? extensions(buildClientSchema(data.data)) : []
                }
                type="request"
                value={requestString}
              />
              <EditorControls />
            </div>
            <EditorCode
              theme={resTheme}
              extensions={[]}
              type="response"
              value={responseString}
            />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Editor;
