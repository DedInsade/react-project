import React from 'react';
import posts from './MyPosts.module.css';
import Post from './Post/Post';
import userPhoto from '../../../img/user.png';

const MyPosts = (props) => {

  let postsElements = props.postsData.map ( p => <Post post={p.post} 
                                                      key={p.id} 
                                                      likesCount={p.likesCount} 
                                                      photo={props.profile.photos.small}
                                                />);

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
          <div className={posts.header}>
            My Posts
          </div>

          <div className={posts.main__newPost}>
            <img className={posts.main__newPost__img} src={props.profile.photos.small != null 
              ? props.profile.photos.small 
              : userPhoto} />
            
            <textarea className={posts.main__newPost__text} 
                      ref={newPostElement} 
                      onChange={onPostChange} 
                      value={props.newPostText}
                      placeholder="Write your thoughts here..."/>

            <button className={posts.main__newPost__addPost} onClick={ onAddPost } >Add post</button>
          </div>

          <br></br>

          <div>
                {postsElements}
          </div>

      </div>
    )
}
export default MyPosts;