import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import HomePage from "./pages/home/HomePage";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Footer from "./components/Footer/Footer";



function App() {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Registration />} />
              <Route path="*" element={<div>Page not found 404</div>} />
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
