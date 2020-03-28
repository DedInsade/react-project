//Store saved for future use in other projects. 
//Using his example, you can understand the work of the logic of Redux.




/* import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";

//Store is main storage with Data
let store = {   
    _state: {
        profilePage: {
            postsData: [ 
                {id: 1, post: 'Are you okey?', likesCount: 15},
                {id: 2, post: "Hi, it's my first post", likesCount: 19} 
            ], 
            newPostText: ''
        },
    
        messagesPage: {
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
        },
        sidebar: {
            friendsData: [
                {id: 2, name: 'Kris'},
                {id: 3, name: 'Anna'},
                {id: 4, name: 'Dmitry'}
            ]
        }
    },
    _callSubscriber()  {
        console.log("State was change");
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;  
    },
 
    dispatch(action) {

        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.messagesPage = messageReducer( this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer( this._state.sidebar, action);

        this._callSubscriber(this._state);
    }    
}


export default store;

window.store = store;

//action is an object(!) with property 'type'
// reducer take 'state' and return new state */