let state = {

    profilePage: {
        postsData: [ 
            {id: 1, post: 'Are you okey?', likes: 15},
            {id: 2, post: "Hi, it's my first post", likes: 19} 
        ]
    },

    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Elliot'},
            {id: 2, name: 'Kris'},
            {id: 3, name: 'Anna'},
            {id: 4, name: 'Dmitry'},
        ],
        messagesData: [
            {id: 1, mess: 'Hi'},
            {id: 2, mess: 'How are you?'},
            {id: 3, mess: 'Bye-bye'} 
        ]
    }
}

export default state;