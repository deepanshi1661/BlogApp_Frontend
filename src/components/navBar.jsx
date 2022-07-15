import React, { Component } from "react";
import './blogapp.css';

class NavBar extends Component {
    render() { 
        return (
            <nav className="navbar fixed-top navbar-dark bg-dark navbar">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Blog Post App</span>
                    <button class="btn btn-outline-light me-2" type="button">+ Add Blog</button>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;