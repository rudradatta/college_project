import React, {useEffect, useState} from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import   {db}  from "./firebase";
//import {doc} from "@firebase/firestore";


function Feed() {
    
const [posts, setPosts] = useState([]);
// const usersCollectionRef = collection(db, "posts");


// useEffect(() => {
//   const getPosts = async () => {
//     const data = await getDocs(usersCollectionRef);
//     setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };

//   getPosts();
// }, []);

// useEffect(() => {
//   const postref = doc(db, "posts");
//   var posting = onSnapshot( postref, (snapshot) => setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data() }))));
// });


//  useEffect(() => {
//    collection(db,'posts').orderBy('timestamp','desc').onSnapshot((snapshot) =>{
//      setPosts(snapshot.doc.map(doc => ({
//        id : doc.id,
//        data: doc.data()
//      })
//     ))
//    } 
//    );
  
//  },[]);

useEffect(() => {
  const q = query(collection(db, "posts"), orderBy("timestamp",'desc'));
onSnapshot(q, (snapshot) => {
    setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data:doc.data() })))
})
 
},[]);

  return (
    <div className="feed">
        <StoryReel/>
        <MessageSender/>
         
        {posts.map((post) => (
          <Post
            key = {post.id}
            profilePic = {post.data.profilePic}
            message = {post.data.message}
            timestamp = {post.data.timestamp}
            username = {post.data.username}
            image = {post.data.image}
          />

        ))}
        

    </div>
  );
}

export default Feed;