import React from "react";
import"./Header.css";
//here
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import {Avatar, IconButton} from "@mui/material"; //changed
import AddIcon from '@mui/icons-material/Add'; //changed
import ForumIcon from '@mui/icons-material/Forum'; //changed
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'; //changed
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; //changed
import { useStateValue } from './StateProvider';
//to here all updated


function Header() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">

          <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ormjp7gs6sjx5wkkalyi"alt="" />
      
          <div className="header_input">
            <SearchIcon/>
            <input placeholder="Search TIU-SOCIAL" type="text"/>
          </div>
      </div> 
     

      <div className="header_center">
         <div className="header_option header_option--active">
           <HomeIcon fontSize="large"/>
         </div>
         
            <div className="header_option">
                <FlagIcon fontSize="large"/>
            </div>
            <div className="header_option">
                  <SubscriptionsIcon fontSize="large"/>
            </div>
            <div className="header_option">
                <StorefrontIcon fontSize="large"/>
            </div>
            <div className="header_option">
                <SupervisedUserCircleIcon fontSize="large"/>
            </div>  
            </div>  
      

      <div className="header_right">
             <div className="header_info">
               <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>     
             </div>
          <IconButton>
            <AddIcon/>
          </IconButton>

          <IconButton>
            <ForumIcon/>
          </IconButton>

          <IconButton>
            <NotificationsActiveIcon/>
          </IconButton>

          <IconButton>
            <ExpandMoreIcon/>
          </IconButton>
         
         
      </div>
      {/* header rightends here */}
    </div>
  );
}

export default Header;