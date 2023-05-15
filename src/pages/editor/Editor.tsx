/* eslint-disable import/no-default-export */
import { Extension } from '@codemirror/state';
import { auth } from 'app/firebase';
import {
  editorSlice,
  useGetSchemaQuery,
} from 'app/providers/StoreProvider/config/reducers';
import { buildClientSchema } from 'graphql';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { Spinner, Wrapper } from 'shared/ui';
import EditorCode from 'shared/ui/editor/EditorCode';
import { extensions } from 'shared/ui/editor/settings/extensions';
import { reqTheme, resTheme } from 'shared/ui/editor/settings/themes';
import { EditorApi } from 'shared/ui/editorApi/EditorApi';
import EditorControls from 'shared/ui/editorControls/EditorControls';

import styles from './Editor.module.scss';

const Editor = () => {
  const dispatch = useAppDispatch();
  const storeApiSchema = useAppSelector((state) => state.editorReducer.schema);
  const requestString = useAppSelector((state) => state.editorReducer.request);
  const responseString = useAppSelector(
    (state) => state.editorReducer.response
  );
  const storeApiURL = useAppSelector((state) => state.editorReducer.apiURL);
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [exts, setExts] = useState<Extension[]>([]);
  const { data, isFetching } = useGetSchemaQuery(storeApiURL);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (data) {
      const schema = buildClientSchema(data.data);
      dispatch(editorSlice.actions.setSchema(schema));
    }
  }, [data, dispatch]);

  useEffect(() => {
    setExts(extensions(storeApiSchema));
  }, [storeApiSchema]);

  return (
    <Wrapper className={styles.innerEditor}>
      <EditorApi storeApiURL={storeApiURL} />
      <div className={styles.wrapper}>
        {isFetching ? (
          <Spinner />
        ) : (
          <div className={styles.content}>
            <div className={styles.playGround}>
              <EditorCode
                theme={reqTheme}
                extensions={exts}
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
