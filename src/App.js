import React, {useState} from 'react';
import './App.css';
import Post from './Post';



function App() {
  const [posts, setPosts] = useState([
    {
      username: "Shubham",
      caption: "lolololol"
    }
    ,{
      username: "Shubham Sharma",
      caption: "lolololol"
    }
  ]);


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
