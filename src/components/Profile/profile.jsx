import React, { Profiler } from 'react';
import prof from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = (props) => {
  debugger
  return (
      <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
    </div>
    )
}
export default Profile;