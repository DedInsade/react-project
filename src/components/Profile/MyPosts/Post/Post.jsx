import React from 'react';
import posts from './Post.module.css';

const Post = (props) => {
    return (
    <div className={posts.post}>

      <div className={posts.img}> 
          <img src="https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale" />
      </div>
      
      <div className={posts.text}>
          <div className={posts.message}>
            {props.post}
          </div>

          <div className={posts.like}>
            <span> {props.likesCount} Likes</span>
          </div>
      </div>
    </div>

    )
}
export default Post;