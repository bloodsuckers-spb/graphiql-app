/* eslint-disable import/no-default-export */
import { autocompletion, closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle, oneDark } from '@codemirror/theme-one-dark';
import { lineNumbers } from '@codemirror/view';
import { auth } from 'app/firebase';
import { graphql } from 'cm6-graphql';
import { GraphQLSchema } from 'graphql';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'shared/hooks';
import { Wrapper } from 'shared/ui';
import EditorCode from 'shared/ui/editor/EditorCode';
import { extensions } from 'shared/ui/editor/settings/extensions';
import { reqTheme, resTheme } from 'shared/ui/editor/settings/themes';
import { EditorApi } from 'shared/ui/editorApi/EditorApi';
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

  const [extensions, setExtensions] = useState([]);
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
    setExtensions([
      bracketMatching(),
      closeBrackets(),
      autocompletion(),
      lineNumbers(),
      oneDark,
      syntaxHighlighting(oneDarkHighlightStyle),
      graphql(storeApiSchema as GraphQLSchema, {
        onShowInDocs(field, type, parentType) {
          alert(
            `Showing in docs.: Field: ${field}, Type: ${type}, ParentType: ${parentType}`
          );
        },
        onFillAllFields(view, schema, _query, cursor, token) {
          alert(`Filling all fields. Token: ${token}`);
        },
      }),
    ]);
  }, [user, navigate, storeApiSchema]);

  return (
    <Wrapper className={styles.innerEditor}>
      <EditorApi />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.playGround}>
            <EditorCode
              theme={reqTheme}
              extensions={extensions}
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
