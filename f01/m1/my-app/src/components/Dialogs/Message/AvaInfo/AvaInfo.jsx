import React from "react";
import s from './AvaInfo.module.css'
import {NavLink} from "react-router-dom";


const AvaInfo =(props)=>{
    return  (
            <div className={s.item}>
                <NavLink className={s.item} activeClassName={s.activeLink}
                          strict to={`/messages/${props.id}`} >
                    <img src={props.ava} alt={'asd'} />
                    {props.id}
                </NavLink>
            </div>

        );

}

export default AvaInfo;