import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import Si from "./Post/Si";

const MyPosts = (props) => {

    let postsElements=
        props.posts.map(p=><Post message={p.message} LikesCount={p.LikesCount}/>);

    let newPostElement=React.createRef();


    let addPost=()=>{
        let text=newPostElement.current.value;
      alert('demjs.com');
    }


    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>
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