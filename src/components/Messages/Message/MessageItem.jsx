import React from 'react';
import cl from './Message1.module.css';

const MessageItem = (props) => {

    return (
        <div className={cl.message}>
            
            <div className={cl.message__1}>
           {props.mess}
            </div>

            <div className={cl.message__2}>
                {props.mess_dude}
                {/* <img  className={mess.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"></img> */}
            </div>
        </div>
    )
} 

export default MessageItem;