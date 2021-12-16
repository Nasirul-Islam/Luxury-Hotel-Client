import './App.css';
import Home from './Pages/Home/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AuthContext from './context/AuthContext/AuthContext';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import AddServices from './Pages/Dashboard/AddServices/AddServices';
import Bookings from './Pages/Dashboard/Bookings/Bookings';
import Booked from './Pages/Dashboard/Booked/Booked';

function App() {
  return (
    <div className="App">
      <AuthContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path="/dashboard" element={<Booked />} />
              <Route path="dashboard/booked" element={<Booked />} />
              <Route path="dashboard/addReview" element={<AddReview />} />
              {/* admin route */}
              <Route path="dashboard/addServices" element={<AddServices />} />
              <Route path="dashboard/bookings" element={<Bookings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContext>
    </div>
  );
}

export default App;
