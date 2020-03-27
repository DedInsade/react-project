const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
 
    dispatch(action) {  // { type: 'ADD-POST' }
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                post: this._state.profilePage.newPostText,
                likesCount: 0
            };
             
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText ='';
        
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }    
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default store;

window.store = store;

//action is an object(!)