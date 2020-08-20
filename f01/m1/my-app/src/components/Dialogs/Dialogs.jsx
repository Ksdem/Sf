import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialigItem/DialogItem";
import Message from "./Message/Message";
import Friends from "../Navbar/Friends/Friends";




const Dialogs = (props) => {



    let dialogsElements = props.state.dialogs.map((d,i) =>
        < DialogItem key={i} name={d.name} id={d.id} />)


    let messagesElements = props.state.messages.map((m,i)=>
        <Message key={i} messages={m.message}/>);

/*
let animalsElements=props.state.animalsData.map((a)=><addMessage nemMessage={a.message}/>);
*/
    return(
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
           {/*     {animalsElements}*/}
            </div>

        </div>)

}
export default Dialogs;