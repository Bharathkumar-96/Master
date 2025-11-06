import React, { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/features/authSlice";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";
import CategoryDetail from "./components/CategoryDetail";
import Signup from "./components/Signup";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Layout from "./components/Layout";
import Favorites from "./components/Favorites";

const ProtectedRoute = memo(({ children }) => {
  const user = useSelector(selectUser);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
});

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected routes wrapped with Layout */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:name" element={<CategoryDetail />} />
      </Route>

      {/* catch-all -> redirect to home */}
  <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default memo(AppRoutes);
