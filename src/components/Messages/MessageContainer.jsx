import React from 'react';
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/messageReducer';
import Message from './Message';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
    
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (messText) => {
            dispatch(updateNewMessageTextActionCreator(messText));
        },

        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }

    }
}

const MessageContainer = connect (mapStateToProps, mapDispatchToProps) (Message);


export default MessageContainer;