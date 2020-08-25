
import React from "react";
import {rerenderEntireTree} from "../render";

let state={
    profilePage:{
        posts:[{id: 1, message: 'Como(tu`) estas?', LikesCount: '17'},
            {id: 2, message: 'Hi, how are you?', LikesCount: '5'},
            {id: 3, message: 'It`s my first post', LikesCount: '25'},
            {id: 4, message: 'I know very vell!', LikesCount: '21'},],
        newPostText: 'Dem'


    },
dialogsPage:{
        new1:'Message',
    messages:[{id: 1, message: 'Hi'},
        {id: 2, message: 'How is'},
        {id: 3, message: 'Yes'},],
    dialogs:[{id: 1, name: 'Wolf',ava: 'https://cs13.pikabu.ru/post_img/big/2019/02/03/4/1549167685160735519.jpg'},
        {id: 2, name: 'Fox', ava: 'https://image.shutterstock.com/image-photo/national-park-cotopaxi-ecuador-wildlife-260nw-1669461565.jpg'},
        {id: 3, name: 'Hare', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiPZDsRVv9f9x8HXQfQZz4Aq-XH4ApmVkXKpLvaFSI1aQ3X1A-pT7jS6vw0yAMGipbayuQYp_Qu0P3ELNYATyjgQ&usqp=CAU&ec=45688577'},
        {id: 4, name: 'Bear', ava: 'https://img.gazeta.ru/files3/823/12342823/Depositphotos_65052241_l-2015-pic905-895x505-35231.jpg'},]}
}


window.state=state;
export let addPost=()=>{
    let newPost={
        id:5,
        message:state.profilePage.newPostText,
        likeCount:0
    };
      state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
      rerenderEntireTree(state);
}
export let updateNewPostText=(newText)=>{
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);
}
export let addMessage=()=>{
    let nemMessage={
        id:2,
        messages: state.dialogsPage.messages,

    };
    state.dialogsPage.messages.push(nemMessage);
    state.dialogsPage.messages='';
    rerenderEntireTree(state);
}
export let updateNewMessageText=(new1)=>{
    state.dialogsPage.new1=new1;
    rerenderEntireTree(state);
}




export default state ;