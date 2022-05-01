import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
       <Story 
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Techno_India_University_-_EM_4_Sector_V_-_Salt_Lake_City_-_Kolkata_2017-04-29_1689.JPG/1024px-Techno_India_University_-_EM_4_Sector_V_-_Salt_Lake_City_-_Kolkata_2017-04-29_1689.JPG"
         profileSrc="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Techno_India_University_Kolkata.svg/1920px-Techno_India_University_Kolkata.svg.png "
         title="TIU "
        /> 
         
        <Story 
         image="https://upload.wikimedia.org/wikipedia/commons/6/66/Grimshaw-NightfallThames.jpg "
         profileSrc="https://upload.wikimedia.org/wikipedia/en/6/65/Dishonored_box_art_Bethesda.jpg "
         title="Shyam "
        /> 

        <Story 
         image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/2nd_Battalion%2C_503rd_Infantry_Regiment%2C_173rd_Airborne_Brigade_depart_Aviano_Air_Base%2C_Italy%2C_Feb._24%2C_2022.jpg/1024px-2nd_Battalion%2C_503rd_Infantry_Regiment%2C_173rd_Airborne_Brigade_depart_Aviano_Air_Base%2C_Italy%2C_Feb._24%2C_2022.jpg "
         profileSrc="https://upload.wikimedia.org/wikipedia/commons/d/da/Prussian_Troops_Parade_Down_the_Champs_%C3%89lys%C3%A9e_in_Paris_%281_March_1871%29.jpg "
         title="Karan "
        /> 
        
        <Story 
        image="https://upload.wikimedia.org/wikipedia/commons/e/ef/Bison_near_a_hot_spring_in_Yellowstone-750px.JPG "
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/c/cc/Masjid_Raya_Kajai_Foto_Fuadi_Zikri.jpg "
        title="Arjun "
       /> 

       <Story 
         image="https://upload.wikimedia.org/wikipedia/commons/a/a3/NEWScotland-2016-Aerial-Blackness_Castle_01.jpg "
         profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sir_CV_Raman.JPG/800px-Sir_CV_Raman.JPG "
         title="CV Raman "
        /> 

        
    </div>
  )
}

export default StoryReel