/* eslint-disable import/no-default-export */
import { auth } from 'app/firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from 'shared/ui';
import EditorCode from 'shared/ui/editor/EditorCode';
import { extensions } from 'shared/ui/editor/settings/extensions';
import { reqTheme, resTheme } from 'shared/ui/editor/settings/themes';
import EditorControls from 'shared/ui/editorControls/EditorControls';

import styles from './Editor.module.scss';

const Editor = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <Wrapper className={styles.innerEditor}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.playGround}>
            <EditorCode
              theme={reqTheme}
              extensions={extensions}
              type="request"
            />
            <EditorControls />
          </div>
          <EditorCode
            theme={resTheme}
            extensions={[]}
            type="response"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Editor;
