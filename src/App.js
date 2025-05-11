import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import WebBlog from './WebBlog';
import Project from './Project';
import NavbarComponent from './NavbarComponent';
import EditPost from './editpost';
import StartPage from './startPage';


function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/web-blog" element={<WebBlog />} />
          <Route path="/project" element={<Project />} />
          <Route path="/edit-post/:id" element={<EditPost />} /> {/* Halaman Edit Post */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
