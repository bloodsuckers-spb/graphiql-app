import { useGetSchemaQuery } from 'app/providers/StoreProvider/config/reducers';
import { useState } from 'react';

import { useAppSelector } from 'shared/hooks';

import { classNames } from 'shared/libs';
import { Wrapper } from 'shared/ui';

import styles from './GraphQlEditor.module.scss';

import {
  EditorMenu,
  RequestEditor,
  ResponseOutput,
  OptionsEditor,
  EditorApiDocs,
  EditorSearchBar,
  EditorControls,
} from './modules';

import type { EditorOptions } from 'app/types';

export const GraphQlEditor = () => {
  const storeApiURL = useAppSelector((state) => state.editorReducer.apiURL);

  const { data, isFetching, isError } = useGetSchemaQuery(storeApiURL);

  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [optionsType, setOptionsType] = useState<EditorOptions>(null);
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const toggleOptions = (type: 'headers' | 'variables') => {
    if (optionsType === type) {
      setIsOpenOptions(false);
      setOptionsType(null);
      return;
    }
    setIsOpenOptions(true);
    setOptionsType(type);
  };

  return (
    <Wrapper className={styles.innerEditor}>
      <EditorMenu setIsDocsOpen={() => setIsDocsOpen((prev) => !prev)} />
      {isDocsOpen && data ? (
        <EditorApiDocs
          isFetching={isFetching}
          isError={isError}
          data={data}
        />
      ) : null}
      <EditorSearchBar isError={isError} />
      <div className={styles.wrapper}>
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
          <div className={styles.options}>
            <button
              onClick={() => toggleOptions('variables')}
              className={classNames(styles.optionsButton, {}, [
                isOpenOptions && optionsType === 'variables'
                  ? styles.active
                  : '',
              ])}
            >
              variables
            </button>
            <button
              onClick={() => toggleOptions('headers')}
              className={classNames(styles.optionsButton, {}, [
                isOpenOptions && optionsType === 'headers' ? styles.active : '',
              ])}
            >
              headers
            </button>
          </div>
          {isOpenOptions && <OptionsEditor type={optionsType} />}
        </>
      </div>
    </Wrapper>
  );
};
