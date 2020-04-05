import React from 'react';
import { connect } from 'react-redux';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC} from '../../redux/usersReducer';
import Users from './users';

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId))
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users) => {
            dispatch( setUsersAC (users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch( setCurrentPageAC (pageNumber) )
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;