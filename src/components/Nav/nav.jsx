import React from 'react';
import cl from'./nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
      <nav className={cl.nav}>
        <div className={`${cl.item} ${cl.active}`}>
          <NavLink to='/profile' activeClassName={cl.active}>Profile</NavLink>
        </div>

        <div className={cl.item}>
          <NavLink to='/messages' activeClassName={cl.active}>Dialogs</NavLink>
        </div>

        <div className={cl.item}>
          <NavLink to='/myprojects' activeClassName={cl.active}>My projects</NavLink>
        </div>
      <br>
      </br>
        <div className={cl.item}>
          <NavLink to='/settings' activeClassName={cl.active}>Settings</NavLink>
        </div>
    </nav>
    )
}

export default Nav;