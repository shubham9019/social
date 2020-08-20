import React, { useEffect, useState } from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";
import { db } from './firebase';
import firebase from 'firebase';

function Post({ postId, user, username, caption,imgUrl }) {
    const [comments, setCommnets] = useState([]);
    const [comment, setCommnet] = useState('');

    useEffect(() => {
        let unsubscribe;
        if(postId){
            unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot) => {
                setCommnets(snapshot.docs.map((doc) => doc.data()));
            });
        }
        return() => {
            unsubscribe();
        };
    },[postId]);

    const postComment = (event) => {
        event.preventDefault();
        db.collection("posts").doc(postId).collection("comments").add({
            text:comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setCommnet('');
    }

    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className = "post__avatar"
                    alt = {username}
                    src="/static/images/avatar/1.jpg"
                />
                <h3>{username}</h3>
            </div>
            
            <img className="post__image" src={imgUrl} alt="" />
            <h4 className="post__text"><b>{username}</b>: {caption}</h4>


            <div className="post__comments">
                {
                    comments.map((comment)=>(
                        <p>
                            <strong>{comment.username}</strong>{comment.text}
                        </p>
                    ))
                }
            </div>


        {user &&(
            <form className="post__commentBox">
                <input
                    className="post__input"
                    type="text"
                    placeholder="add comments"
                    value= {comment}
                    onChange={(e) => setCommnet(e.target.value)}
                    />
                    <button
                        className="post__button"
                        disabled={!comment}
                        type="submit"
                        onClick={postComment}
                    >
                        Post
                    </button>
            </form>
        )}
        </div>
    )
}

export default Post
