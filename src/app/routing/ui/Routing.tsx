import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routesConfig } from 'shared/config';

export const Routing = () => (
  <Suspense fallback={<div>Loading...</div>}>
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
