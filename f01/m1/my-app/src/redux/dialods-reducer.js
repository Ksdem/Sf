const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';



let initialState={
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

const dialogsReducer = (state=initialState, action) => {



    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }


    return state;
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE

})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})
export default dialogsReducer;