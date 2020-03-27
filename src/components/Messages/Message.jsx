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

    let dialogsElements = props.state.dialogsData.map ( d =>  <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messagesData.map ( m =>  <MessageItem mess={m.mess} mess_dude={m.mess2} id={m.id}/>);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={mess.dialogs}>
            <div className={mess.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
            <div className={mess.Messages}>
                {messagesElements} 
            </div>
            <div>
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.NewMessageText} />
                <br />
                <button onClick={sendMessage}>Send Message</button>
            </div>
            </div>
        </div>

    )
}

export default Message;