const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
        users: [ ],
        pageSize: 6,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false
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
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default: 
            return state;
    }
}

export const followAC = (usersId) => ({type: FOLLOW, usersId})
export const unfollowAC = (usersId) => ({type: UNFOLLOW, usersId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export default usersReducer;