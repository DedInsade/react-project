import React from 'react';
import head from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
       <header className={head.header}>
        <div className={head.logo}>My React App</div>

        <div className={head.loginBlock}>
          { props.isAuth 
          ? props.login
          : <NavLink to={'/login'}>Login</NavLink> }
        </div>
      </header>
    )
}
export default Header;