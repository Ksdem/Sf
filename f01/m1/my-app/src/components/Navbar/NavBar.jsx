import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";



const NavBar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.Items}>
                <div>
                <NavLink className={s.item} to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div >
                <NavLink className={s.item} to='/dialogs' activeClassName={s.activeLink}> Messages</NavLink>
            </div>
            <div >
                <NavLink className={s.item} to='/News' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div >
                <NavLink className={s.item} to='/Music' activeClassName={s.activeLink}>Music</NavLink>
            </div >
            <div >
                <NavLink className={s.item} to='/Settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
                <div >
                    <NavLink className={s.item} to='/Friends' activeClassName={s.activeLink}>Friends</NavLink>
                </div>
            </div>
        </nav>);
}
 export default NavBar;