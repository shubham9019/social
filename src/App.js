import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import {db} from './firebase'
import { makeStyles, Button } from '@material-ui/core/';
import Modal from '@material-ui/core/Modal';


function getModalStyle(){
  const top = 50;
  const left = 50;

  return{
    top: `${top}`,
    left: `${left}`,
    transform: `translate{-${top}%,-${left}%}`,
  };
}

  const useStyles = makeStyles((theme) => ({
    paper:{
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2,4,3),
    },
  }));


function App() {

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>{ 
      setPosts(snapshot.docs.map(doc => ({
        id : doc.id ,
        post: doc.data()
       })));
     })
  },[]);

  return (
    <div className="App">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
      <div style={modalStyle} className={classes.paper}>
        <h2>I am a modal</h2>
        </div>
      </Modal>
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        
      </div>

      <Button onClick={()=> setOpen(true)}>Signup</Button>

      {
        posts.map(({id, post}) =>(
          <Post key={id} username={post.username} caption={post.caption} imgUrl={post.imgUrl}/>
        ))
      }
      <Post />
      <Post username="Shubham" caption="lol" imgUrl="https://static.boredpanda.com/blog/wp-content/uploads/2020/07/shiba-cheems-meme-dog-balltze-53.jpg"/>
      <Post username="Harshit" caption="lol"/>
    </div>
  );
}

export default App;
