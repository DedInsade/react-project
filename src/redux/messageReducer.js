const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messageReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let messText = state.newMessageText;
        
            state.messagesData.push({ id: 2, mess2: messText });
            state.newMessageText= '';
            break;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messText;
            break;
        default:
                return state;
    }

    return state;
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (messText) =>({type: UPDATE_NEW_MESSAGE_TEXT, messText: messText})

export default messageReducer;