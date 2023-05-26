import { isRejectedWithValue } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

import { translateWithLocalStorage } from 'shared/libs';

import type { Middleware } from '@reduxjs/toolkit';

export const RTKQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    toast(
      translateWithLocalStorage(
        'Извините, ничего не найдено',
        'Sorry, There is nothing found'
      ),
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      }
    );
  }

  return next(action);
};
