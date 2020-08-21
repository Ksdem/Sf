import React from "react";
import s from './Friends.module.css'
import ButtonForFriends from './../ButtonFriends/ButtonForFriends'

const Friends = (props) => {
    return (
       <div>
           <div className={s.gridContainer}>
               <ButtonForFriends name='Hare'  to={'/messages/Hare'}/>
               <ButtonForFriends name='Wolf'  to={'/messages/Wolf'}/>
               <ButtonForFriends name='Fox'  to={'/messages/Fox'}/>
           </div>
       </div>
    );
}

export default Friends;