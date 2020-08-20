import Message from "../components/Dialogs/Message/Message";
import React from "react";

let state={
    profilePage:{
        posts:[{id: 1, message: 'Como(tu`) estas?', LikesCount: '17'},
            {id: 2, message: 'Hi, how are you?', LikesCount: '5'},
            {id: 3, message: 'It`s my first post', LikesCount: '25'},
            {id: 4, message: 'I know very vell!', LikesCount: '21'},],

    },
dialogsPage:{
    messages:[{id: 1, message: 'Hi'},
        {id: 2, message: 'How is'},
        {id: 3, message: 'Yes'},],
    dialogs:[{id: 1, name: 'Wolf'},
        {id: 2, name: 'Fox'},
        {id: 3, name: 'Hare'},
        {id: 4, name: 'Bear'},],
},
    animals: {
        animalsData: [
            {id: 'Fox',
                ava: 'https://image.shutterstock.com/image-photo/national-park-cotopaxi-ecuador-wildlife-260nw-1669461565.jpg'
            },
            {id: 'Hare',
                ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiPZDsRVv9f9x8HXQfQZz4Aq-XH4ApmVkXKpLvaFSI1aQ3X1A-pT7jS6vw0yAMGipbayuQYp_Qu0P3ELNYATyjgQ&usqp=CAU&ec=45688577'
            },
            {id: 'Squirrel', ava: 'https://simple-fauna.ru/wp-content/uploads/2017/10/obyknovennaya-belka.jpg'},
            {id: 'Hedgehog',
                ava: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-09/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202019-09-18%20%D0%B2%200.54.49.jpg?itok=KGrumvl6'
            },
            {id: 'Bear',
                ava: 'https://img.gazeta.ru/files3/823/12342823/Depositphotos_65052241_l-2015-pic905-895x505-35231.jpg'
            },
            {id: 'Wolf', ava: 'https://cs13.pikabu.ru/post_img/big/2019/02/03/4/1549167685160735519.jpg'}

        ],
}
}
export let addPost=(postMessage)=>{
    let newPost={
        id:5,
        message:postMessage,
        likeCount:0
    };
      state.profilePage.posts.push(newPost);
}
export let addMessage=(Message)=>{
    let nemMessage={
        id:2,
        message: Message,
    };
    state.dialogsPage.messages.push(nemMessage);
}

export let animals=(animal)=>{
    let newAnimal={
        id:5,
        ava:animal
    }
    state.animals.animalsData.push(newAnimal)
}






export default state ;