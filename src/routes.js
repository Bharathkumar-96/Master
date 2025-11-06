/**
 * src/routes.js
 * React Router v6 boilerplate for this app.
 *
 * Notes:
 *  - Install the dependency if you don't have it:
 *      npm install react-router-dom
 *  - To enable routing, import and render `AppRoutes` from `src/index.js` or `src/App.js`:
 *      import AppRoutes from './routes';
 *      <AppRoutes />
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/login';
import Dashboard from './components/Dashboard';
import CategoryDetail from './components/CategoryDetail';
import Signup from './components/Signup';
import HeaderBar from './components/Header';
import Favorites from './components/Favorites';

const Home = lazy(() => import('./App'));

export default function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected routes wrapped with HeaderBar */}
          <Route element={<HeaderBar />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/favorites" element={<Favorites />} />

            <Route path="/category/:name" element={<CategoryDetail />} />
          </Route>

          {/* catch-all -> redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
