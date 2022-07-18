import React from "react";
import { Link } from "react-router-dom";
import './blogapp.css';

const NavBar = () => { 
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark navbar">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Blog Post App</span>
                <Link to="/addBlog" class="btn btn-outline-light me-2" type="button">+ Add Blog</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;