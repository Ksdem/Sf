import React from "react";
import s from './ButtonForFriends.module.css'
import {NavLink} from "react-router-dom";


const ButtonForFriends = (props) => {
    return (
        <button className={`${s.button} ${s.button_hover}`}>
            <NavLink className={s.button} activeClassName={s.activeLink} to={props.to ? props.to : ''}>
                {props.name}
            </NavLink>
        </button>);
}
export default ButtonForFriends;

