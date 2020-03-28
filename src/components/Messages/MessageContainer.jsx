import React from 'react';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import mess from './Message.module.css';
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/messageReducer';
import Message from './Message';

const DialogItem = (props) => {
    return (
        <div className={`${mess.dialog} ${mess.active}`}>
            <NavLink to={"/message/" + props.id}>{props.name}</NavLink> 
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={mess.message}>
            <div className={mess.message__1}>
{/*              <img  className={mess.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"></img>
 */}            {props.mess}
            </div>
           
            <div className={mess.message__2}>
                {props.mess_dude}
                {/* <img  className={mess.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"></img> */}
            </div>
        </div>
    )
}


const MessageContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onMessageTextChange = (messText) => {
        props.store.dispatch(updateNewMessageTextActionCreator(messText));
    }

    return (<Message updateNewMessageText={onMessageTextChange} sendMessage={onSendMessageClick} messagesPage={state}/>)
}

export default MessageContainer;