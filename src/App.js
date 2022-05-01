import React from "react";
import './App.css';
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Login from "./Login";
import Widgets from "./Widgets";
import { useStateValue } from './StateProvider';


function App() {
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  //eslint-disable-next-line
  return (
    
    <div className="app">
      {!user ? ( <Login /> )
         : (

                <>
                      <Header />

                    <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                    </div>
                </>

           ) }
        
        
        
     

    </div>
  );
}

export default App;
