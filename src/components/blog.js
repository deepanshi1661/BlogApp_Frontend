import React, { useEffect } from 'react';
import './blogapp.css';
import { Link } from "react-router-dom";

// useEffect( () => {
//     const fetchData = async () => {
//         const data = await fetch('http://localhost:9000/blogs/');
//     }
//     const result = fetchData()
//     // make sure to catch any error
//     .catch(console.error);;

//   // what will be logged to the console?
//   console.log(result);
// },[]
// );

const Blog = () => {
    return (
        <div class="card shadow border text-center blogCard">
            <div class="mx-auto col-md-10 card-body">
                <h2 class="card-title blogtitle">Food Blog</h2>
                <p class="card-text text">Pinch of Yum is one of the best food blogs on the internet. It was started as a casual hobby for founder Lindsay Ostrom but is now a full-time business that reaches millions of people. From the blog’s homepage, you can quickly find recipes by clicking on categories like healthy, vegetarian, instant pot, meal prep, and more. As you scroll further down, you can check out the latest recipes from the blog.</p>
                <span class="blogBy">Blog by Akash</span>
                <Link to="/blogDetail" class="btn btn-sm">Read more...</Link>
                </div>
            </div>
    );
}

 
export default Blog;
