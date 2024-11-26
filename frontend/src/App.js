import logo from './logo.svg';
import './App.css';
import img1 from "./assests/doc1.png";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Doctors from "./pages/Doctors"
import Login from "./pages/Login"
import About from "./pages/About"
import Contact from "./pages/Contact"
import MyProfile from "./pages/MyProfile"
import Appointments from "./pages/Appointment"
import MyAppointments from "./pages/MyAppointments"
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar className='line-clamp-2'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        
        <Route path="/doctor/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/appointments/:docId" element={<Appointments />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
      </Routes>
      <Footer></Footer>

      
    </div>
  );
}

export default App;
