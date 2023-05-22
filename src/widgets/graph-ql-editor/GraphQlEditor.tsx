import { useGetSchemaQuery } from 'app/providers/StoreProvider/config/reducers';
import { useState } from 'react';

import { useAppSelector } from 'shared/hooks';

import { Spinner, Wrapper } from 'shared/ui';

import { EditorApi } from 'shared/ui/editorApi/EditorApi';
import EditorControls from 'shared/ui/editorControls/EditorControls';

import styles from './GraphQlEditor.module.scss';

import {
  EditorMenu,
  RequestEditor,
  ResponseOutput,
  VariablesEditor,
  EditorApiDocs,
} from './modules';

export const GraphQlEditor = () => {
  const storeApiURL = useAppSelector((state) => state.editorReducer.apiURL);

  const { data, isFetching, isError } = useGetSchemaQuery(storeApiURL);

  const [isDocsOpen, setIsDocsOpen] = useState(false);

  return (
    <Wrapper className={styles.innerEditor}>
      {data && !isError && (
        <EditorMenu setIsDocsOpen={() => setIsDocsOpen((prev) => !prev)} />
      )}
      {isDocsOpen && data ? <EditorApiDocs data={data} /> : null}
      <EditorApi isError={isError} />
      <div className={styles.wrapper}>
        {isFetching ? (
          <Spinner />
        ) : (
          <>
            <div className={styles.content}>
              <div className={styles.playGround}>
                <RequestEditor
                  editable={!isError}
                  data={data}
                />
                <EditorControls isError={isError} />
              </div>
              <ResponseOutput isError={isError} />
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
