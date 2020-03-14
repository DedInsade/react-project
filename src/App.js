import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Profile from './components/Profile/profile';
import Message from './components/Messages/Message';
import { Route, BrowserRouter } from 'react-router-dom';
import MyProjects from './components/MyProjects/myproject';
import Setting from './components/Settings/settings';


const App = (props) => {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={ () => <Profile postsData={props.postsData}/>}/>
        <Route path='/messages' render={ () => <Message messagesData={props.messagesData} dialogsData={props.dialogsData}/>}/>
        <Route path='/myprojects' render={ () => <MyProjects/>}/>
        <Route path='/settings' render={ () => <Setting/>}/>
      </div>
    </div>
    </BrowserRouter>
    );
}

export default App;
