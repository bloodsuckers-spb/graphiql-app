/* eslint-disable import/no-default-export */
import { editorSlice } from 'app/providers/StoreProvider/config/reducers';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import styles from './EditorControls.module.scss';

type Props = {
  isError: boolean;
};

const EditorControls = ({ isError }: Props) => {
  const dispatch = useAppDispatch();

  const apiURL = useAppSelector((state) => state.editorReducer.apiURL);
  const requestString = useAppSelector((state) => state.editorReducer.request);
  const requestVariables = useAppSelector(
    (state) => state.editorReducer.variables
  );

  const makeReq = async (query: string, variables: string) => {
    const res = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });
    const data = await res.json();
    return dispatch(
      editorSlice.actions.setResponse(JSON.stringify(data, null, 2))
    );
  };

  return (
    <div className={styles.wrapper}>
      <button
        aria-label="run code"
        className={styles.play}
        onClick={() => makeReq(requestString, requestVariables)}
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
