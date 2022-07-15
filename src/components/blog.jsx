import React, { Component } from 'react';
import './blogapp.css';

class Blog extends Component {
    state = {} 
    render() { 
        return (
            <div class="card shadow border text-center blogcard">
                <div class="mx-auto col-md-10 card-body">
                    <h2 class="card-title blogtitle">Special title treatment</h2>
                    <p class="card-text text">With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.</p>
                    <span class="blogBy">Blog by Akash</span>
                    <a href='#' class="btn btn-sm">Read more...</a>
                </div>
            </div>
        );
    }
}
 
export default Blog;
