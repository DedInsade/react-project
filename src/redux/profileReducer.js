const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
            id: 3,
            post: state.newPostText,
            likesCount: 0
            };
         
            state.postsData.push(newPost);
            state.newPostText ='';
            break;
        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText;
            break;
        default:
            return state;
    }
    
    return state;
}  

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;


