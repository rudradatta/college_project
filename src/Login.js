import { Button } from '@mui/material';
import React from "react";
import "./Login.css";
import {auth, provider} from  "./firebase";
import { signInWithPopup } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer";



function Login() {

  const [ state ,dispatch] = useStateValue();

    const signIn= () => 
    {

      signInWithPopup(auth, provider)
      .then
      (
        (result =>
          {

                    dispatch({
                      type: actionTypes.SET_USER,
                      user: result.user,
                    })

          }
        )
      )
    };
  return (
    <div className="login">
        <div className="login_logo">
            <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ormjp7gs6sjx5wkkalyi"
            alt=""
            />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Techno_India_University_Kolkata.svg/1920px-Techno_India_University_Kolkata.svg.png"
            alt=""
            />
        </div>
        <Button type ="submit" onClick={signIn}>
            Sign In
        </Button>
    </div>
  );
}

export default Login;
