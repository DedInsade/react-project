import React from 'react';
import posts from './Post.module.css';
import userPhoto from '../../../../img/user.png';


const Post = (props) => {
    return (
    <div className={posts.post}>

          <div> 
              <img className={posts.img} src={props.photo != null 
                ? props.photo
                : userPhoto} 
            />
          </div>
      
          <div className={posts.message}>
              {props.post}
          </div>

          <button className={posts.like}> {props.likesCount} Likes </button>
      </div>

    )
}
export default Post;