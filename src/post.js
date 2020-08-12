import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className = "post__avatar"
                    alt = "Shubham"
                    src="/static/images/avatar/1.jpg"
                />
                <h3>Username</h3>
            </div>
            
            <img className="post__image" src="https://static.boredpanda.com/blog/wp-content/uploads/2020/07/shiba-cheems-meme-dog-balltze-53.jpg" alt="" />
            <h4 className="post__text"><b>Username</b>: Caption</h4>
        </div>
    )
}

export default Post
