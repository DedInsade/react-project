import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {id: 1, post: 'Are you okey?', likes: 15},
    {id: 2, post: "Hi, it's my first post", likes: 19}
  ] 

  let dialogsData = [
    {id: 1, name: 'Elliot'},
    {id: 2, name: 'Kris'},
    {id: 3, name: 'Anna'},
    {id: 4, name: 'Dmitry'},
]

let messagesData = [
    {id: 1, mess: 'Hi'},
    {id: 2, mess: 'How are you?'},
    {id: 3, mess: 'Bye-bye'}
]


ReactDOM.render(<App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
