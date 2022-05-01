import { Avatar } from "@mui/material";
import { Button } from '@mui/material';
import React,{ useState } from "react";
import "./MessageSender.css";
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';
import {db} from './firebase';
import {getFirestore} from "firebase/firestore";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    serverTimestamp,
  } from "firebase/firestore";
// import firebase from "firebase";
// done updating mui

function MessageSender(){
    const [{ user }, dispatch] = useStateValue();
    const[ input, setInput] = useState( "");
    const[ imageUrl, setImageUrl] = useState( "");


    const handleSubmit = (e) => {
        e.preventDefault();

        // const [Input, setInput] = useState("");
        // const [Image, setImage] = useState("");
        // const usersCollectionRef = collection(db, "posts");

        //some db stuff
        // collection(db,'posts').add({
            // message: input,
            // timestamp: Timestamp.fromDate(new Date("December 10, 1815")),
            // profilePic : user.photoURL, 
            // username: user.displayName, 
            // image: imageUrl,
        // });

         addDoc(collection(db, "posts"), {
            message: input,
            timestamp: serverTimestamp(),
            profilePic : user.photoURL, 
            username: user.displayName, 
            image: imageUrl,
          });
        

        
        // const createUser = async () => {
        //     await addDoc(usersCollectionRef, { message: setInput,
        //         timestamp: getFirestore.FieldValue.serverTimestamp(),
        //         profilePic : user.photoURL, 
        //         username: user.displayName, 
        //         image: setImage, });
        //   };

        //   const updateUser = async (id, age) => {
        //     const userDoc = doc(db, "posts", id);
        //     const newFields = { age: age + 1 };
        //     await updateDoc(userDoc, newFields);
        //   };



    };

    // const [Input, setInput] = useState("");
    //     const [Image, setImage] = useState("");
    //     const usersCollectionRef = collection(db, "posts");

    //     const createUser = async () => {
    //         await addDoc(usersCollectionRef, { message: setInput,
    //             timestamp: getFirestore.FieldValue.serverTimestamp(),
    //             profilePic : user.photoURL, 
    //             username: user.displayName, 
    //             image: setImage, });
    //       };


return (
    <div className="messageSender">
        <div className="messageSender_top">
            <Avatar src={user.photoURL}/>
            <form>

                <input 
                value={input}
                onChange = {(e) => setInput(e.target.value)}
                className="meassageSender_input"
                placeholder={`What's on your mind,${user.displayName}?`}
                />

                <input 
                value={imageUrl}
                onChange={(e)=> setImageUrl(e.target.value)}
                placeholder="image URL (optional)" />

                 <Button onClick={handleSubmit} type="submit">
                     Submit
                </Button> 
                
                {/* <button onClick={createUser}>
                    Hidden submit
                </button> */}
            </form>
        </div>

        <div className="messageSender_bottom">
            <div className="messageSender_option">
                <VideocamIcon style={{ color: "red"}}/>
                <h3>Live Video</h3>
            </div>

    
            <div className="messageSender_option">
                <PhotoLibraryIcon style={{ color: "green"}}/>
                <h3>Photo/Video</h3>
                </div>

            <div className="messageSender_option">
                <InsertEmoticonIcon style={{ color: "orange"}}/>
                <h3>Feeling/Activity</h3>   
            </div>
    
       
        </div>
</div>

  );
}

export default MessageSender;