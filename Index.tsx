
import React, { useState } from 'react';
import Login from '@/components/Login';
import PatientDashboard from '@/components/PatientDashboard';
import ProfessionalDashboard from '@/components/ProfessionalDashboard';
import AdminDashboard from '@/components/AdminDashboard';
import ScheduleAppointment from '@/components/ScheduleAppointment';
import CalendarView from '@/components/CalendarView';

const Index = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = (userType: string) => {
    setCurrentUser(userType);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('dashboard');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleBack = () => {
    setCurrentPage('dashboard');
  };

  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  if (currentPage === 'schedule') {
    return <ScheduleAppointment onBack={handleBack} />;
  }

  if (currentPage === 'calendar') {
    return <CalendarView onBack={handleBack} />;
  }

  switch (currentUser) {
    case 'patient':
      return <PatientDashboard onLogout={handleLogout} onNavigate={handleNavigate} />;
    case 'professional':
      return <ProfessionalDashboard onLogout={handleLogout} onNavigate={handleNavigate} />;
    case 'admin':
      return <AdminDashboard onLogout={handleLogout} />;
    default:
      return <Login onLogin={handleLogin} />;
  }
};

export default Index;
