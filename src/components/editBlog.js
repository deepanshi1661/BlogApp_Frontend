import React, { useState } from 'react';
import EditNavBar from './editBlogNavBar';

const EditBlog = () => {
    
    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");
    const [ content, setContent ] = useState("");

    return (
        <div>
            <EditNavBar />
            <form>
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
                <button type="button" class="btn btn-success saveChanges" name="saveChanges">Save Changes</button>
                <button type="button" class="btn btn-danger delete" name="delete">Delete</button>
            </form>
        </div>
    );
}
 
export default EditBlog;