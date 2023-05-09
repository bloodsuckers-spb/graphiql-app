/* eslint-disable import/no-default-export */
import { auth } from 'app/firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Editor = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return <div>Editor page</div>;
};

export default Editor;
