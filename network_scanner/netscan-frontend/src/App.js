import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import CreateScanPage from './pages/CreateScanPage';   
import ScanDetailPage from './pages/ScanDetailPage';  
import ProfilePage from './pages/ProfilePage'; 
import ActivityPage from './pages/ActivityPage';  
import PrivateRoute from './auth/PrivateRoute';
import NavbarSidebar from './components/NavbarSidebar'; 
import EditScanPage from './pages/EditScanPage';
import HomePage from './pages/HomePage';




const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarSidebar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/dashboard" element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        } />
        <Route path="/" element={<HomePage />} />
        <Route path="/create-scan" element={
          <PrivateRoute>
            <CreateScanPage />
          </PrivateRoute>
        } />
        <Route path="/scan/:id" element={
          <PrivateRoute>
            <ScanDetailPage />
          </PrivateRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        } />
        <Route path="/edit-scan/:id" element={
          <PrivateRoute>
            <EditScanPage />
          </PrivateRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        } />
        <Route path="/activity" element={
          <PrivateRoute>
            <ActivityPage />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
};



export default App;
