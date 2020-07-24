import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import Si from "./Post/Si";

const MyPosts = (props) => {
    let posts = [
        {id: 1, message: 'Como(tu`) estas?', LikesCount: '17'},
        {id: 2, message: 'Hi, how are you?', LikesCount: '5'},
        {id: 3, message: 'It`s my first post', LikesCount: '25'},
        {id: 4, message: 'I know very vell!', LikesCount: '21'},


    ]
    let postsElements=posts.map(p=><Post message={p.message} LikesCount={p.LikesCount}/>);
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea></div>
                <div>
                    <button>
                        add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
               {/* <Post message={postData[0].message} LikesCount={postData[0].LikesCount}/>
                <Post message={postData[1].message} LikesCount={postData[1].LikesCount}/>
                <Post message={postData[2].message} LikesCount={postData[2].LikesCount}/>
                <Post message={postData[3].message} LikesCount={postData[3].LikesCount}/>*/}
            </div>
        </div>);

}
export default MyPosts;