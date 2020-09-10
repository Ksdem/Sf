import React from 'react';

import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    console.log('profiles',props)
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>);
}
export default Profile;