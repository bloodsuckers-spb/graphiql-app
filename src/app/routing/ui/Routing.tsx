import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routesConfig } from 'shared/config';

import { Spinner } from 'shared/ui';

export const Routing = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      {routesConfig.map(({ id, path, content }) => (
        <Route
          key={`${id}`}
          path={path}
          element={content}
        />
      ))}
    </Routes>
  </Suspense>
);
