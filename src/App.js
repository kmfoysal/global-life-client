import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import { StepFormProvider } from './context/StepFormContext';
import HomePage from "./pages/home/HomePage";
import Login from "./pages/Login/Login";
import MyItems from './pages/myItems/MyItems';
import Registration from "./pages/Registration/Registration";
import PublicRoute from './utils/PublicRoute';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
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
              <MyItems />
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
