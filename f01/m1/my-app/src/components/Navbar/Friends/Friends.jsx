import React from "react";
import s from './Friends.module.css'
import Button from './../ButtonFriends/ButtonForFriends'

const Friends = (props) => {
    return (
       <div>
           <div className={s.gridContainer}>
               <Button name='Hare' className={s.one} to={'/messages/Hare'}/>
               <Button name='Wolf' className={s.two} to={'/messages/Wolf'}/>
               <Button name='Fox' className={s.three} to={'/messages/Fox'}/>
           </div>
       </div>
    );
}

export default Friends;