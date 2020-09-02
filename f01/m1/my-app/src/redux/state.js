let store={
     _state:{
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
    },
    _callSubscriber(){
        console.log('State changet')
    },
    getState(){
         return this._state;
    },
   addPost(){
        let newPost={
            id:5,
            message:this._state.profilePage.newPostText,
            likeCount:0
        };
       this._state.profilePage.posts.push(newPost);
       this._state.profilePage.newPostText='';
       this._callSubscriber();
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText =newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let nemMessage = {
            id: 2,
            messages: this._state.dialogsPage.messages,
        }
    },
    updateNewMessageText(new1){
        this._state.dialogsPage.new1=new1;
        this._callSubscriber(this._state)
    },
    subscribe(observer){
        this._callSubscriber=observer;
    }
}

window.store=store;


export default store ;