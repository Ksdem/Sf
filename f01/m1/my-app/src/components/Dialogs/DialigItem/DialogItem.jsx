import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.item}>
            <NavLink className={s.item} to={path} activeClassName={s.activeLink}>
                <img src={props.ava} alt={'asd'} />
                {props.name}
            </NavLink>
        </div>)
}
export default DialogItem;

