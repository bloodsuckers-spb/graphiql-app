import { auth } from 'app/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';

import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

import { Layout, Spinner } from 'shared/ui';

import { Header } from 'widgets';

import { toastOptions } from './constants';
import { Routing } from './routing';

export const App = () => {
  const [user, loading, error] = useAuthState(auth);

  if (error) {
    toast('Server Error', { ...toastOptions });
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Layout>
          <Routing />
        </Layout>
      )}
      <ToastContainer {...toastOptions} />
    </>
  );
};
