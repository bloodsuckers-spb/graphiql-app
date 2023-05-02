/* eslint-disable import/no-default-export */
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'shared/hooks/redux';

import Editor from './Editor';

const EditorPrivate = () => {
  const isLogin = useAppSelector((state) => state.loginReducer.value);
  return <>{isLogin ? <Editor /> : <Navigate to={'/'} />}</>;
};

export default EditorPrivate;
