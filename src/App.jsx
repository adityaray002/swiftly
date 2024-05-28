
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Signup_vendors from './components/Signup_vendors';
import Vendors_list from './components/Vendors_list';
import Login_signup_dashboard from './components/Login_signup_dashboard';
import Login_vendor from './components/Login_vendor';
import Home from './components/Home';
import Signup_user from './components/Signup_user';
import Slots from './components/Slots';
import Proceed from './components/Proceed';
import Booking_details from './components/Booking_details';
import Login_user from './components/Login_user';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Signupvendor" element={<Signup_vendors />} />
          <Route path="/getvendors" element={<Vendors_list />} />
          <Route path="/Login_signup_dashboard" element={<Login_signup_dashboard />} />
          <Route path="/Login_vendor" element={<Login_vendor />} />
          <Route path="/Login_user" element={<Login_user />} />
          <Route path="/" element={<Home />} />
          <Route path="/Signupuser" element={<Signup_user />} />
          <Route path="/Slots" element={<Slots />} />
          <Route path="/Proceed" element={<Proceed />} />
          <Route path="/Booking_details" element={<Booking_details />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </>
  );
}

export default App;
