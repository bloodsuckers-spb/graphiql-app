import { auth } from 'app/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer } from 'react-toastify';

import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from 'shared/ui';
import { Spinner } from 'shared/ui/spinner';

import { toastContainerOptions } from './constants';
import { Routing } from './routing';

export const App = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Layout>
          <Routing />
        </Layout>
      )}
      <ToastContainer {...toastContainerOptions} />
    </>
  );
};
