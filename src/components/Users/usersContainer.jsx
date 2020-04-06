import React from 'react';
import { connect } from 'react-redux';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC, toggleIsFetchingAC} from '../../redux/usersReducer';
import Users from './users.js';
import * as axios from 'axios';
import Preloader from '../common/preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        
        if (this.props.users.length === 0) {
        this.props.setToggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }


    onPageChanged = (pageNumber) => {

        this.props.setToggleFetching(true);
        this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setToggleFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }


        render() { 
            return  <> 
                        <Users  totalUsersCount={this.props.totalCount}
                                pageSize={this.props.pageSize}
                                currentPage={this.props.currentPage}
                                onPageChanged={this.onPageChanged}
                                users={this.props.users}
                                follow={this.props.follow}
                                unfollow={this.props.unfollow}
                                isFetching={this.props.isFetching}
                        /> 
                    </>
        }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setToggleFetching: (ifFetching) => {
            dispatch(toggleIsFetchingAC(ifFetching))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer);
