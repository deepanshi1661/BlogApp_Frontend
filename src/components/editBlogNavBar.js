import React from "react";
import { Link } from "react-router-dom";
import './blogapp.css';

const EditNavBar = () => { 
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark navbar">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand mb-0 h1">Blog Post App</Link>
                <Link to="/blogDetail" class="btn btn-outline-light me-2" type="button">Back</Link>
            </div>
        </nav>
    );
}
 
export default EditNavBar;