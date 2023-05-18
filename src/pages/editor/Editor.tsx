/* eslint-disable import/no-default-export */
import { auth } from 'app/firebase';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { GraphQlEditor } from 'widgets/graph-ql-editor';

const Editor = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <>
      <GraphQlEditor />
    </>
  );
};

export default Editor;
