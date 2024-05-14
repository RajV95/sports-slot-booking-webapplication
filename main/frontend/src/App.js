import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import profile from './pages/profile.jsx';
import slotbooking from './pages/slotbooking.jsx';
import aboutUs from './pages/aboutUs.jsx';

function App() {
  return (
    <div>
      {/* wrapping the components in the webpages*/}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<profile />} />
          <Route path='/slotbooking' element={<slotbooking />} />
          <Route path='/aboutUs' element={<aboutUs />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
