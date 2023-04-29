import { ToastContainer } from 'react-toastify';

import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from 'shared/ui';

import { toastContainerOptions } from './constants';
import { Routing } from './routing';

export const App = () => (
  <>
    <Layout>
      <Routing />
    </Layout>
    <ToastContainer {...toastContainerOptions} />
  </>
);
