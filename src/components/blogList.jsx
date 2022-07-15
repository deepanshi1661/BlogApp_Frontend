import React, { Component } from 'react'
import Blog from './blog';

class BlogList extends Component {
    state = {  } 
    render() { 
        return (
            <div class="blogList">
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
            </div>
        );
    }
}
 
export default BlogList;