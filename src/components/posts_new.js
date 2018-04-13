import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class PostsNew extends Component {
    render() {
        return (
            <div>
                PostsNew!
                <Link className="btn btn-primary" to="/">
                    Cancel
                </Link>
            </div>

        );
    }
}

export default PostsNew;