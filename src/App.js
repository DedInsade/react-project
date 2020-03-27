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
      <Nav state={props.state.sidebar}/>
      <div className='app-wrapper-content'>
        <Route path='/profile' render={ () => <Profile 
                                                    profilePage={props.state.profilePage} 
                                                    addPost={props.addPost} 
                                                    updateNewPostText={props.updateNewPostText}/>}/>
        <Route path='/messages' render={ () => <Message 
                                                    messagesPage={props.state.messagesPage}
                                                    sendMessage={props.sendMessage}
                                                    updateNewMessageText={props.updateNewMessageText}
                                                    state={props.state.messagesPage}/>}/>
        <Route path='/myprojects' render={ () => <MyProjects/>}/> 
        <Route path='/settings' render={ () => <Setting/>}/>
      </div>
    </div>
    </BrowserRouter>
    );
}

export default App;
