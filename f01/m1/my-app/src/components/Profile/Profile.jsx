import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost} from "../../redux/state";
import {addMessage} from "../../redux/state";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPOst={addPost}/>
        </div>);
}
export default Profile;