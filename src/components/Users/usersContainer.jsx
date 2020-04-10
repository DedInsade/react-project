import React from 'react';
import { connect } from 'react-redux';
import { follow,
         unfollow, 
         setUsers, 
         setCurrentPage, 
         setUsersTotalCount, 
         toggleIsFetching } from '../../redux/usersReducer';
import Users from './users.js';
import * as axios from 'axios';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

    componentDidMount() {
        
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setUsersTotalCount(response.totalCount);
            });
        }
    


    onPageChanged = (pageNumber) => {

        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        usersAPI.getUsers(pageNumber , this.props.pageSize).then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.items);
                    this.props.setUsersTotalCount(response.totalCount);
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

export default connect (mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
    }) (UsersContainer);
