import './App.css';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import NoMatch from './component/NoMatch';
import ErrorBoundary from './component/core/ErrorBoundary';
import Nav from './component/core/Nav'
import Root from './component/page/Root';
import React from 'react';

const theme = createTheme({
  palette: {
  },
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '&:focus': {
            outline: 'none',
          },
        },
      },
    },
  },

});

const EventsMap = React.lazy(() => import('./component/page/EventsMap'));

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <Suspense>
            <Routes>
              <Route path="/" element={<Nav />}>
                <Route path="/" element={<Root />} />

              </Route>
              <Route path="map" element={<EventsMap />} />

              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Suspense>

        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
};

export default App;