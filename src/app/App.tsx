import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';

import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from 'shared/ui';

import { toastContainerOptions } from './constants';
import { Routing } from './routing';

import { fallbackRender, logError } from '../shared/libs';

export const App = () => (
  <ErrorBoundary
    fallbackRender={fallbackRender}
    onError={logError}
  >
    <Layout>
      <Routing />
    </Layout>
    <ToastContainer {...toastContainerOptions} />
  </ErrorBoundary>
);
