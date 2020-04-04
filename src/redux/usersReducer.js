const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
        users: [
            /* {id: 1, photoUrl: 'https://www.1999.co.jp/itbig57/10578453.jpg', followed: true, 
            fullName: 'Elliot' , status: 'Good day', location: {city: 'Saint-Peterburg', country: 'Russia'} },
            {id: 2, photoUrl: 'https://www.1999.co.jp/itbig57/10578453.jpg', followed: false, 
            fullName: 'John' , status: 'Good day to programming', location: {city: 'Minsk', country: 'Belarus'} },
            {id: 3, photoUrl: 'https://www.1999.co.jp/itbig57/10578453.jpg', followed: true, 
            fullName: 'Vitaliy' , status: 'Time to D&D 5e', location: {city: 'Uzgorod', country: 'Ukrain'} },
            {id: 4, photoUrl: 'https://www.1999.co.jp/itbig57/10578453.jpg', followed: false, 
            fullName: 'Kirishiko' , status: 'Anime is live', location: {city: 'Tokyo', country: 'Japan'} },
            {id: 5, photoUrl: 'https://www.1999.co.jp/itbig57/10578453.jpg', followed: true, 
            fullName: 'Vitaliy' , status: 'Time to D&D 5e', location: {city: 'Uzgorod', country: 'Ukrain'} },
            {id: 6, photoUrl: 'https://www.1999.co.jp/itbig57/10578453.jpg', followed: false, 
            fullName: 'Kirishiko' , status: 'Anime is live', location: {city: 'Tokyo', country: 'Japan'} } */
         ]
};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: false}
                    }
                    return u; 
                })
            }
        }
        case FOLLOW: {
             return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: true}
                    }
                    return u; 
                })
            }
        }
        
        case SET_USERS: {
            return {
                ...state, 
                users: [...state.users, ...action.users]
            }
        }
        default: 
            return state;
    }
}

export const followAC = (usersId) => ({type: FOLLOW, usersId})
export const unfollowAC = (usersId) => ({type: UNFOLLOW, usersId})
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;