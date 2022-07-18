import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddBlogNavBar from './addBlogNavBar';
import blogSlice from '../redux/reducer/blogSlice';
import { addBlogs } from '../redux/actions/blogAction';

const AddBlog = () => { 

    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");
    const [ content, setContent ] = useState("");

    const dispatch = useDispatch

    const handleUploadBlog = (e) => {
        e.preventDefault();

        dispatch(AddBlog({
            title: title,
            author: author,
            content: content
        }));

        console.log("tgdaf");
    };

    return (
        <div>
            <AddBlogNavBar />
            <form onSubmit={(e) => handleUploadBlog(e)}>
                <h1 className='editTitle'>Title</h1>
                <input
                    type="text" 
                    class="blogAddTitle" 
                    name="title" 
                    value={title} 
                    placeholder='Write title for blog' 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <h1 className='editTitle'>Author Name</h1>
                <input 
                    type="text" 
                    class="blogAddTitle" 
                    name="author" 
                    value={author} 
                    placeholder='Write the author name'
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <h1 className='editTitle'>Tell your story...</h1>
                <input 
                    type="text" 
                    class="blogAddContent" 
                    name="content" 
                    value={content} 
                    placeholder='Write your blog here...'
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit" class="btn btn-success saveChanges" name="saveChanges">Upload Blog</button>
                <button type="button" class="btn btn-danger delete" name="delete">Delete</button>
            </form>
        </div>
    );
}


export default AddBlog;