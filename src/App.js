import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import './App.css';
import AllEvents from './components/allEvents/AllEvents';
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import { StepFormProvider } from './context/StepFormContext';
import EventDetails from './pages/eventDetails/EventDetails';
import HomePage from "./pages/home/HomePage";
import Login from "./pages/Login/Login";
import MyItems from './pages/myItems/MyItems';
import Registration from "./pages/Registration/Registration";
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';



function App() {
  return (
      <BrowserRouter basename="/">
          <ToastContainer theme="colored" position="top-right"></ToastContainer>
          <Header />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/allevents" element={<AllEvents />} />
              <Route path="/eventdetails/:eventId" element={<EventDetails />} />
              <Route
                  path="/login"
                  element={
                      <PublicRoute>
                          <Login />
                      </PublicRoute>
                  }
              />
              <Route
                  path="/signup"
                  element={
                      <PublicRoute>
                          <Registration />
                      </PublicRoute>
                  }
              />
              <Route
                  path="/myitems"
                  element={
                      <StepFormProvider>
                          <PrivateRoute>
                              <MyItems />
                          </PrivateRoute>
                      </StepFormProvider>
                  }
              />
              <Route path="*" element={<div>Page not found 404</div>} />
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
