import React from 'react';
import posts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.postsData.map ( p => <Post post={p.post} likes={p.likes}/>);

    return (
      <div className={posts.main}>
          <div>
            My Posts
          </div>
          <div>
            <textarea></textarea><br></br>
            <button>Add post</button>
          </div>
          <br></br>
            <div className={posts.posts}>
                {postsElements}
            </div>
      </div>
    )
}
export default MyPosts;