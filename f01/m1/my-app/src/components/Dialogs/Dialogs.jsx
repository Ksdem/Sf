import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialigItem/DialogItem";
import Message from "./Message/Message/Message";

import ButtonMessage from "./Message/ButtonMessage/ButtonMessage";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d, i) =>
        <DialogItem key={i} name={d.name} id={d.id} ava={d.ava}/>)


    let messagesElements = props.state.messages.map((m, i) =>
        <Message key={i} messages={m.message}/>);


    let newMessage = React.createRef();
    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange=(newValue)=>{
        console.log(newValue)
        // let text=newMessage.current.value;
        props.updateNewMessageText(newValue);
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
                <textarea   onChange={(event)=>onMessageChange(event.target.value)}
                            ref={newMessage}
                            value={props.state.new1}
                />
                <div className={s.button}>

                    <ButtonMessage name={'message'} onClick={addMessage}>add</ButtonMessage>

                </div>
            </div>

        </div>);

}
export default Dialogs;