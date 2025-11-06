// Temporary routes file
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/features/authSlice';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import CategoryDetail from './components/CategoryDetail';
import Signup from './components/Signup';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Favorites from './components/Favorites';

function ProtectedRoute({ children }) {
  const user = useSelector(selectUser);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Login />
            <Footer />
          </>
        } />
        <Route path="/signup" element={
          <>
            <Signup />
            <Footer />
          </>
        } />

        {/* Protected routes wrapped with Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/favorites" element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          } />
          <Route path="/category/:name" element={
            <ProtectedRoute>
              <CategoryDetail />
            </ProtectedRoute>
          } />
        </Route>

        {/* catch-all -> redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}