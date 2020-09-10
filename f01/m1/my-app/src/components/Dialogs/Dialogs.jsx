import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialigItem/DialogItem";
import Message from "./Message/Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialods-reducer";



const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsElements = props.state.dialogs.map((d, i) =>
        <DialogItem key={i} name={d.name} id={d.id} ava={d.ava}/>)


    let messagesElements = props.state.messages.map((m, i) =>
        <Message key={i} messages={m.message}/>);
    let newMessageBody = state.newMessageBody;


    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let addMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onNewMessageChange}
                          value={newMessageBody}
                />
                <div>

                    <button  onClick={addMessageClick}>Send</button>

                </div>
            </div>

        </div>);

}
export default Dialogs;