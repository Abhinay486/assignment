import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import Dashboard from './Dashboard.jsx';
import Tables from './Tables.jsx';
import Billing from './Billing.jsx';
import Profile from './Profile.jsx';
import RTL from './Rtl.jsx';
import VirtualReality from './VirtualReality.jsx';
import Signin from './SignIn.jsx';
import Signup from './SignUp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="tables" element={<Tables />} />
          <Route path="billing" element={<Billing />} />
          <Route path="virtual-reality" element={<VirtualReality />} />
          <Route path="rtl" element={<RTL />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/signin" element={<Layout />}>
          <Route index element={<Signin />} />
        </Route>
        <Route path="/signup" element={<Layout />}>
          <Route index element={<Signup />} />
        </Route>
        <Route path="*" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
