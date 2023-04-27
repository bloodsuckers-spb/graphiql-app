import { ToastContainer } from 'react-toastify';

import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from '../shared/ui';
import { Routing } from './routing';

import { toastContainerOptions } from './constants';

export const App = () => (
  <>
    <Layout>
      <Routing />
    </Layout>
    <ToastContainer {...toastContainerOptions} />
  </>
);
