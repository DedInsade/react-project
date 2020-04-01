import React, { Profiler } from 'react';
import prof from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = (props) => {
  return (
      <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
    )
}
export default Profile;