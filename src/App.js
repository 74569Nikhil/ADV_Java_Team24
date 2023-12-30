
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigationbar } from './Components/Navigationbar.jsx';
import { AboutUs } from './Components/AboutUs.jsx';
import { Home } from './Components/Home.jsx';
import Signup from './Components/SignUp.jsx';
import Login from './Components/Login.jsx';
import { Subscription } from './Components/Subscription.jsx';

import { ContactUs } from './Components/ContactUs.jsx';
// import Footer from './Components/Footer.jsx';


function App() {
  return (
   <BrowserRouter>
    <Navigationbar></Navigationbar> 
   <Routes>
    {/* <Route path="/" element={<Navigationbar/>}></Route> */}
    <Route path="/" element={<Home />}></Route>
    <Route path="/AboutUs" element={<AboutUs />}></Route>
    <Route path="/sign-up" element={<Signup />}></Route>
    <Route path="/log-in" element={<Login />}></Route>
    <Route path="/subscription" element={<Subscription/>}></Route>
    <Route path="/contactus" element={<ContactUs/>}></Route> 
    
   </Routes>
   {/* <Footer></Footer> */}
   </BrowserRouter>
  );
}


export default App;
