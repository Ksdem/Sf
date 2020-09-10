import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialods-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'Como(tu`) estas?', LikesCount: '17'},
                {id: 2, message: 'Hi, how are you?', LikesCount: '5'},
                {id: 3, message: 'It`s my first post', LikesCount: '25'},
                {id: 4, message: 'I know very vell!', LikesCount: '21'},],
            newPostText: 'Dem'


        },
        dialogsPage: {
            messages: [{id: 1, message: 'Hi'},
                {id: 2, message: 'How is'},
                {id: 3, message: 'Yes'},
                {id: 4, message: 'Yes'},
                {id: 5, message: 'Yes'},],
            dialogs: [{
                id: 1,
                name: 'Wolf',
                ava: 'https://cs13.pikabu.ru/post_img/big/2019/02/03/4/1549167685160735519.jpg'
            },
                {
                    id: 2,
                    name: 'Fox',
                    ava: 'https://image.shutterstock.com/image-photo/national-park-cotopaxi-ecuador-wildlife-260nw-1669461565.jpg'
                },
                {
                    id: 3,
                    name: 'Hare',
                    ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiPZDsRVv9f9x8HXQfQZz4Aq-XH4ApmVkXKpLvaFSI1aQ3X1A-pT7jS6vw0yAMGipbayuQYp_Qu0P3ELNYATyjgQ&usqp=CAU&ec=45688577'
                },
                {
                    id: 4,
                    name: 'Bear',
                    ava: 'https://img.gazeta.ru/files3/823/12342823/Depositphotos_65052241_l-2015-pic905-895x505-35231.jpg'
                },],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);


    }

}


window.store = store;


export default store;