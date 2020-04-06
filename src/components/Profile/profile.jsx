import React, { Profiler } from 'react';
import ProfileInfo from './ProfileInfo/profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = (props) => {
  return (
      <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer profile={props.profile}/>
    </div>
    )
}
export default Profile;