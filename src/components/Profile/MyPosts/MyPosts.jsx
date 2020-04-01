import React from 'react';
import posts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.postsData.map ( p => <Post post={p.post} key={p.id}likesCount={p.likesCount}/>);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }
  
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

    return (
      <div className={posts.main}>
          <div className='posts.header'>
            My Posts
          </div>
          <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
            <br></br>
            <button onClick={ onAddPost } >Add post</button>
          </div>
          <br></br>
            <div className={posts.posts}>
                {postsElements}
            </div>
      </div>
    )
}
export default MyPosts;