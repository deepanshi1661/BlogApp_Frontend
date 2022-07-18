import React from "react";
import { Link } from "react-router-dom";
import './blogapp.css';

const AddBlogNavBar = () => {
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark navbar">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Blog Post App</span>
                <Link to="/" class="btn btn-outline-light me-2" type="button">Back</Link>
            </div>
        </nav>
    );
}

export default AddBlogNavBar;