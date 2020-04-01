import React from 'react';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import mess from './Message.module.css';
import MessageItem from './Message/MessageItem';

const DialogItem = (props) => {
    return (
        <div className={`${mess.dialog} ${mess.active}`}>
            
            <NavLink to={"/message/" + props.id}>
            <img  className={mess.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"></img>
                {props.name}
            </NavLink> 
        </div>
    )
}


const Message = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogsData.map ( d =>  <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messagesData.map ( m =>  <MessageItem mess={m.mess} mess_dude={m.mess2} key={m.id}/>);
    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onMessageTextChange = (e) => {
        let messText = e.target.value;
        props.updateNewMessageText(messText);
    }

    return (
        <div className={mess.dialogs}>
            <div className={mess.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={mess.Messages}>
                <div className={mess.message}>
                    {messagesElements} 
                </div>
                <div>
                    <div><textarea className={mess.textarea}
                                placeholder='Enter your message' 
                                onChange={onMessageTextChange} 
                                value={newMessageText} />
                    </div>
                    <br />
                    <div><button className={mess.sendMessage} onClick={onSendMessageClick}>Send Message</button></div>
                </div>
            </div>
        </div>
    )
}

export default Message;