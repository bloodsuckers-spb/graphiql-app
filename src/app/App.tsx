import { ToastContainer } from 'react-toastify';

import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from '../shared/ui';

import { toastContainerOptions } from './constants';

export const App = () => (
  <>
    <Layout>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officiis
      tempora numquam suscipit quisquam. Dolorem ducimus vitae ea, labore odio
      maiores delectus nemo quas dolore sequi. Ipsa inventore labore quisquam!
    </Layout>
    <ToastContainer {...toastContainerOptions} />
  </>
);
