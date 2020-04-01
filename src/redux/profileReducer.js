const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [ 
        {id: 1, post: 'Are you okey?', likesCount: 15},
        {id: 2, post: "Hi, it's my first post", likesCount: 19} 
    ], 
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            let text = state.newPostText;
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, {id: 3, post: text, likesCount: 0}]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}  

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;


