import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/features/authSlice';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import CategoryDetail from './components/CategoryDetail';
import Favorites from './components/Favorites';
import HeaderBar from './components/Header';

function ProtectedRoute({ children }) {
  const user = useSelector(selectUser);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<HeaderBar />}>
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/category/:name" element={
            <ProtectedRoute>
              <CategoryDetail />
            </ProtectedRoute>
          } />
          <Route path="/favorites" element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
