import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Books from './components/Books';
import NotFound from './components/NotFound';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

// Define routing structure
const routing = (
  <Router>
    <h3 style={{ textAlign: "center" }}>Book Management System</h3>
    <hr />
    <div style={{ textAlign: "center" }}>
      <Link to="/">Home</Link> |
      <Link to="/Books">Books</Link> |
      <Link to="/About">About Us</Link> |
      <Link to="/Contact">Contact Us</Link> |
      <Link to="/Login">Login</Link>
    </div>
    <hr />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Books" element={
        <ProtectedRoute returnUrl="/Books">
          <Books />
        </ProtectedRoute>
      } />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

// Render the routing structure
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
