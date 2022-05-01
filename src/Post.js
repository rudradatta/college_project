import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import   {db}  from "./firebase";
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
    serverTimestamp,
    toDate,
    Timestamp,

  } from "firebase/firestore";

//   const docRef = doc(db, 'posts');
//   const updateTimestamp =  updateDoc(docRef, {
//     timestamp: serverTimestamp()
// });

// module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           }
//         }
//       }
//     ]
//   }
function Post({profilePic, image ,username, timestamp, message}) {

  return (
    <div className="post">

        <div className="post_top">
            <Avatar src={profilePic}
            className="post_avatar"/>

            <div className="post_topInfo">
                <h3>{username} </h3>
                <p> {new Date((timestamp).toDate()).toDateString()} </p>
            </div>

        </div>
{/* //post top ends here */}

        <div className="post_bottom">
          <p>{message}</p>
        </div>

            <div className="post_image">
                <img src={image} alt=""/>
            </div>


            <div className="post_options">
                    <div className="post_option">
                        <ThumbUpIcon/>
                        <p>Like</p>
                    </div> 

                    <div className="post_option">
                        <ChatBubbleOutlineIcon/>
                        <p>Comment</p>
                    </div> 

                    <div className="post_option">
                        <NearMeIcon/>
                        <p>Share</p>
                    </div>

                    <div className="post_option">
                        <AccountCircleIcon/>
                        <ExpandMoreOutlinedIcon/>
                        <p>Like</p>
                    </div>
             </div>

    </div>
    
  );
}

export default Post;