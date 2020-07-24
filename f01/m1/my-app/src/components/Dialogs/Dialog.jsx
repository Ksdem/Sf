import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>)
}
const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>)
}

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Dem'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Ksu'},
        {id: 4, name: 'Anfisa'},
    ]
    let dialogsElements=dialogs.map((d)=> <DialogItem name={d.name} id={d.id}/>)
       /* [<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>,
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
];*/

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is'},
        {id: 3,  message: 'Yes'},
    ]
    let messagesElements=messages.map(m=><Message message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }



                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>*/}

            </div>
            <div className={s.messages}>
                {messagesElements}
                {/*<Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>*/}
            </div>
        </div>)

}
export default Dialogs;