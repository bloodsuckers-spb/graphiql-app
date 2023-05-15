/* eslint-disable import/no-default-export */
import { editorSlice } from 'app/providers/StoreProvider/config/reducers';
import { useAppDispatch, useAppSelector } from 'shared/hooks';

import styles from './EditorControls.module.scss';

const EditorControls = () => {
  const dispatch = useAppDispatch();

  const apiURL = useAppSelector((state) => state.editorReducer.apiURL);
  const requestString = useAppSelector((state) => state.editorReducer.request);

  const makeReq = async (query: string) => {
    const res = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    return dispatch(editorSlice.actions.setResponse(JSON.stringify(data)));
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.play}
        onClick={() => makeReq(requestString)}
      >
        <svg className={styles.playIcon}>
          <use href="sprite.svg#play"></use>
        </svg>
      </button>
    </div>
  );
};

export default EditorControls;
