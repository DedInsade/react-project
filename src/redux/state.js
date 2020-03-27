let rerenderEntireTree =() => {
    console.log("State was change");
}

let state = {

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
}

export let addPost = () => {
    let newPost = {
        id: 3,
        post: state.profilePage.newPostText,
        likesCount: 0
    };
     
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText ='';

    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let sendMessage = () => {
    let newMessage = {
        id: 2,
        mess2: state.messagePage.newMessageText,
    };

    state.messagePage.messagesData.push(newMessage);
    state.messagesPage.newMessageText ='';

    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntireTree(state);
}


export const subscribe = (observer) => {
    rerenderEntireTree = observer;  
}
    export default state;