/* eslint-disable import/no-default-export */
import { auth } from 'app/firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'shared/hooks';
import { Wrapper } from 'shared/ui';
import EditorCode from 'shared/ui/editor/EditorCode';
import { extensions } from 'shared/ui/editor/settings/extensions';
import { reqTheme, resTheme } from 'shared/ui/editor/settings/themes';
import EditorApi from 'shared/ui/editorApi/EditorApi';
import EditorControls from 'shared/ui/editorControls/EditorControls';

import styles from './Editor.module.scss';

const Editor = () => {
  const storeApiSchema = useAppSelector((state) => state.editorReducer.schema);
  const requestString = useAppSelector((state) => state.editorReducer.request);
  const responseString = useAppSelector(
    (state) => state.editorReducer.response
  );
  const user = auth.currentUser;
  const navigate = useNavigate();
  const exts = extensions(storeApiSchema);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <Wrapper className={styles.innerEditor}>
      <EditorApi />
      <div className={styles.wrapper}>
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
      </div>
    </Wrapper>
  );
};

export default Editor;
