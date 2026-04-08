import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/PublicLayout';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Services from './pages/public/Services';
import News from './pages/public/News';
import Events from './pages/public/Events';
import Complaints from './pages/public/Complaints';
import Contact from './pages/public/Contact';
import ResidentLogin from './pages/resident/Login';
import ResidentDashboard from './pages/resident/Dashboard';
import ClerkLogin from './pages/clerk/Login';
import ClerkDashboard from './pages/clerk/Dashboard';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="news" element={<News />} />
          <Route path="events" element={<Events />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/resident/login" element={<ResidentLogin />} />
        <Route path="/clerk/login" element={<ClerkLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/resident/dashboard" element={<ProtectedRoute role="resident"><ResidentDashboard /></ProtectedRoute>} />
        <Route path="/clerk/dashboard" element={<ProtectedRoute role="clerk"><ClerkDashboard /></ProtectedRoute>} />
        <Route path="/admin/dashboard" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
