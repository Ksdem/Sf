const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';



let initialState={
        posts: [{id: 1, message: 'Como(tu`) estas?', LikesCount: '17'},
            {id: 2, message: 'Hi, how are you?', LikesCount: '5'},
            {id: 3, message: 'It`s my first post', LikesCount: '25'},
            {id: 4, message: 'I know very vell!', LikesCount: '21'},],
        newPostText: 'Dem'
}
const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = ' ';
            return state;
        case  UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:return state;

    }

}

export const addPostActionCreator = () => ({
    type: ADD_POST

})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})


export default profileReducer;