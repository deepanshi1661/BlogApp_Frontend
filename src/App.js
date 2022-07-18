import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import BlogList from './components/blogList';
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import BlogDetail from './components/blogDetail';
import EditBlog from './components/editBlog';
import AddBlog from './components/addBlog';

function App() {
    return (
      <Router>
        <Routes>
          <Route exact path="/addBlog" element={<AddBlog />} />
          <Route exact path="/editBlog" element={<EditBlog />} />
          <Route exact path="/blogDetail" element={<BlogDetail />} />
          <Route exact path="/" element={[<NavBar />, <BlogList />]} />
        </Routes>
      </Router>
  );
}
 
export default App;