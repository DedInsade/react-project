import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile

    /* profilePage: state.profilePage */
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },

    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;