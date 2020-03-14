import React from 'react';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import mess from './Message.module.css';

const DialogItem = (props) => {
    return (
        <div className={`${mess.dialog} ${mess.active}`}>
            <NavLink to={"/message/" + props.id}>{props.name}</NavLink> 
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={mess.message}>{props.mess}</div>
    )
}

const Message = (props) => {

    let dialogsElements = props.dialogsData.map ( d =>  <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.messagesData.map ( m =>  <MessageItem mess={m.mess} id={m.id}/>);

    return (
        <div className={mess.dialogs}>
            <div className={mess.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={mess.Messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Message;