import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR24lyPm0Me6g5P8ApkI5cR0f54WshW3-4iFjFbVFV53knFcKP9&usqp=CAU'/>
            {props.message}
            <div>
                <span>Like</span>
                {props.LikesCount}
            </div>
        </div>);

}
export default Post;