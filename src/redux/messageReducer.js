const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Elliot'},
        {id: 2, name: 'Kris'},
        {id: 3, name: 'Anna'},
        {id: 4, name: 'Dmitry'},
    ],
    messagesData: [
        {id: 1, mess: 'Hi',},
        {id: 2, mess2: 'Hello'},
        {id: 1, mess: 'How are you?'},
        {id: 2, mess2: 'I am fine. Whats up?'},
        {id: 1, mess: 'Nothing'}, 
        {id: 2, mess2: 'Okey, bro'}, 
        {id: 2, mess2: 'Good night!'} 
    ],
    newMessageText: ''
};

const messageReducer = (state = initialState, action) => {

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