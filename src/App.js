import React from 'react';
import './App.css';
import Header from './components/Header/header';
import { Route, BrowserRouter } from 'react-router-dom';
import MyProjects from './components/MyProjects/myproject';
import Setting from './components/Settings/settings';
import MessageContainer from './components/Messages/MessageContainer';
import NavContainer from './components/Nav/navContainer';
import UsersContainer from './components/Users/usersContainer';
import ProfileContainer from './components/Profile/profileContainer';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <NavContainer />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={ () => <ProfileContainer />}/>
        <Route path='/messages' render={ () => <MessageContainer />}/>
        <Route path='/users' render={ () => <UsersContainer/>}/>
        <Route path='/myprojects' render={ () => <MyProjects/>}/> 
        <Route path='/settings' render={ () => <Setting/>}/>
      </div>
    </div>
    </BrowserRouter>
    );
}

export default App;
