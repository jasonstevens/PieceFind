import './App.css';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router';

import ErrorBoundary from './component/core/ErrorBoundary';
import EventsCal from './component/page/EventsCal';
import React from 'react';

const EventsMap = React.lazy(() => import('./component/page/EventsMap'));

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Suspense>
          <Routes>
            <Route path="map" element={<EventsMap />} />
            <Route path="*" element={<EventsCal />} />
          </Routes>
        </Suspense>

      </ErrorBoundary>
    </>
  );
};

export default App;