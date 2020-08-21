import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialigItem/DialogItem";
import Message from "./Message/Message/Message";

import AvaInfo from "./Message/AvaInfo/AvaInfo";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d, i) =>
        <DialogItem key={i} name={d.name} id={d.id} ava={d.ava}/>)


    let messagesElements = props.state.messages.map((m, i) =>
        <Message key={i} messages={m.message}/>);


    /*let animalsElements=props.state.animalsData.map(a=>
        <AvaInfo nemMessage={a.ava}/>);*/


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
                {/*{animalsElements}*/}
            </div>

        </div>)

}
export default Dialogs;