/* eslint-disable import/no-default-export */
import { editorSlice } from 'app/providers/StoreProvider/config/reducers';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import styles from './EditorControls.module.scss';

type Props = {
  isError: boolean;
};

const EditorControls = ({ isError }: Props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const apiURL = useAppSelector((state) => state.editorReducer.apiURL);
  const requestString = useAppSelector((state) => state.editorReducer.request);
  const requestVariables = useAppSelector(
    (state) => state.editorReducer.variables
  );
  const requestHeaders = useAppSelector((state) => state.editorReducer.headers);

  const { t } = useTranslation();

  const makeReq = async (
    query: string,
    variables: string,
    requestHeaders: string
  ) => {
    const res = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        ...JSON.parse(!requestHeaders ? '{}' : requestHeaders),
      },
      body: JSON.stringify({
        query,
        variables: !variables ? {} : JSON.parse(variables),
      }),
    });
    const data = await res.json();
    return dispatch(
      editorSlice.actions.setResponse(JSON.stringify(data, null, 2))
    );
  };

  return (
    <div className={styles.wrapper}>
      <button
        aria-label={`${t('playButtonAriaLabel')}`}
        className={styles.play}
        onClick={() => makeReq(requestString, requestVariables, requestHeaders)}
        disabled={isError}
      >
        <svg className={styles.playIcon}>
          <use href="sprite.svg#play"></use>
        </svg>
      </button>
    </div>
  );
};

export default EditorControls;
