import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Profile from './components/Profile/profile';
import { Route, BrowserRouter } from 'react-router-dom';
import MyProjects from './components/MyProjects/myproject';
import Setting from './components/Settings/settings';
import store from './redux/store';
import MessageContainer from './components/Messages/MessageContainer';


const App = (props) => {
debugger;
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav state={props.state.sidebar}/>
      <div className='app-wrapper-content'>
        <Route path='/profile' render={ () => <Profile store={props.store}/>}/>
        <Route path='/messages' render={ () => <MessageContainer store={props.store}/>}/>
        <Route path='/myprojects' render={ () => <MyProjects/>}/> 
        <Route path='/settings' render={ () => <Setting/>}/>
      </div>
    </div>
    </BrowserRouter>
    );
}

export default App;
