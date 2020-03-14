import React, { Profiler } from 'react';
import prof from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/profileinfo';



const Profile = (props) => {

    return (
      <div>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} />
    </div>
    )
}
export default Profile;