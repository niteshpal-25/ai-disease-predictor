import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Predictor from "./pages/Predictor";
import Results from "./pages/Results";
import History from "./pages/History";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predictor" element={<ProtectedRoute><Predictor /></ProtectedRoute>}/>
        <Route path="/results" element={<ProtectedRoute><Results /></ProtectedRoute>}/>
        <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>}/>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;