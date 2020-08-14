import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import {db} from './firebase'


function App() {
  const [posts, setPosts] = useState([
  ]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>{ 
      setPosts(snapshot.docs.map(doc => doc.data()));
     })
  },[]);

  return (
    <div className="App">
      
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        
      </div>
      {
        posts.map(posts =>(
          <Post username={posts.username} caption={posts.caption}/>
        ))
      }
      <Post />
      <Post username="Shubham" caption="lol"/>
      <Post username="Harshit" caption="lol"/>
    </div>
  );
}

export default App;
