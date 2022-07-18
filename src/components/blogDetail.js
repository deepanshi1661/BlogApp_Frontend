import React from 'react';
import NavBarBlog from './navBarBlog';
import './blogapp.css';

const BlogDetail = () => {
    return (
        <div>
            <NavBarBlog />
            <div class="card shadow border text-left blogDetail">
                <div class="mx-auto col-md-10 card-body">
                    <h2 class="card-title blogContentTitle">Food Blog</h2>
                    <p class="card-text">Pinch of Yum is one of the best food blogs on the internet. It was started as a casual hobby for founder Lindsay Ostrom but is now a full-time business that reaches millions of people. From the blog’s homepage, you can quickly find recipes by clicking on categories like healthy, vegetarian, instant pot, meal prep, and more. As you scroll further down, you can check out the latest recipes from the blog. Pinch of Yum is one of the best food blogs on the internet. It was started as a casual hobby for founder Lindsay Ostrom but is now a full-time business that reaches millions of people. From the blog’s homepage, you can quickly find recipes by clicking on categories like healthy, vegetarian, instant pot, meal prep, and more. As you scroll further down, you can check out the latest recipes from the blog.</p>
                    <span class="blogBy">Blog by Akash</span>
                </div>
            </div>
        </div>
    );
}
 
export default BlogDetail;