import { useGetSchemaQuery } from 'app/providers/StoreProvider/config/reducers';

import { useState } from 'react';
import { useAppSelector } from 'shared/hooks';

import { classNames } from 'shared/libs';
import { Spinner, Wrapper } from 'shared/ui';

import { EditorApi } from 'shared/ui/editorApi/EditorApi';
import EditorControls from 'shared/ui/editorControls/EditorControls';

import styles from './GraphQlEditor.module.scss';

import {
  EditorMenu,
  RequestEditor,
  ResponseOutput,
  OptionsEditor,
} from './modules';

export const GraphQlEditor = () => {
  const storeApiURL = useAppSelector((state) => state.editorReducer.apiURL);

  const { data, isFetching, isError } = useGetSchemaQuery(storeApiURL);

  const [optionsType, setOptionsType] = useState<
    'variables' | 'headers' | null
  >(null);

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
      <EditorMenu />
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
                  isOpenOptions && optionsType === 'headers'
                    ? styles.active
                    : '',
                ])}
              >
                headers
              </button>
            </div>
            {isOpenOptions && <OptionsEditor type={optionsType} />}
          </>
        )}
      </div>
    </Wrapper>
  );
};
