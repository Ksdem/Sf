import React from "react";
import s from './Message.module.css'
import {NavLink} from "react-router-dom";
import ButtonMessage from "../ButtonMessage/ButtonMessage";

const Message = (props) => {
    return (

        <div className={s.item}>


            {props.messages}


        </div>
    );

}

export default Message;