import React from 'react';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import mess from './Message.module.css';
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/messageReducer';

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


const Message = (props) => {

    let state = props.store.getState().messagesPage;
    debugger;
    let dialogsElements = state.dialogsData.map ( d =>  <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messagesData.map ( m =>  <MessageItem mess={m.mess} mess_dude={m.mess2} id={m.id}/>);
    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onMessageTextChange = (e) => {
        let messText = e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(messText));
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
                    <div><textarea 
                                placeholder='Enter your message' 
                                onChange={onMessageTextChange} 
                                value={newMessageText} />
                    </div>
                    <br />
                    <div><button onClick={onSendMessageClick}>Send Message</button></div>
                </div>
            </div>
        </div>
    )
}

export default Message;