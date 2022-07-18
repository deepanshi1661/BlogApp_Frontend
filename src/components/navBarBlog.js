import React from "react";
import './blogapp.css';
// import LikeButton from "./like";
import {Link}  from "react-router-dom";

const NavBarBlog = () => {
    return (
        <nav className="navbar fixed-top navbar-dark bg-dark navbar">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand mb-0 a"><button class="btn btn-dark me-2" type="button">Home</button></Link>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-success me-2" type="button"><img src="https://th.bing.com/th/id/R.9213fca0397d6d406c34803dcc62927d?rik=3Q3yS0z70uyJog&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2flike-transparent-background%2flike-transparent-background-15.png&ehk=WzshDj19Y%2fWUdgdbHmKyc7J7CdZILyq8jePiM12h%2bmg%3d&risl=&pid=ImgRaw&r=0" height="30" width="30" alt="Like"/>Like</button>
                    <Link to="/editBlog" class="btn btn-light me-2"><img src="https://th.bing.com/th/id/R.3dfff4afe3606f6a5d2dbbb267a950c5?rik=Vx%2bNiFDdS2w%2b5w&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2ficonsmind%2foutline%2f512%2fPen-icon.png&ehk=iqORM6SWraGnJDTOJ2RtCjndokVjOa7Krh4jFPIidpc%3d&risl=&pid=ImgRaw&r=0" height="30" width="30" alt="Edit"/> Edit</Link>
                    <button class="btn btn-danger me-2" type="button"><img src="https://cdn0.iconfinder.com/data/icons/doodle-general-office/91/Doodle_General_-_Office_24-512.png" height="30" width="30" alt="delete"/>  Delete</button>
                </div>
            </div>
        </nav>
    );  
}
 
export default NavBarBlog;