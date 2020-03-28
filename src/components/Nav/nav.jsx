import React from 'react';
import cl from'./nav.module.css';
import { NavLink } from 'react-router-dom';


const FriendsItem = (props) => {
    return (
      <div className={cl.item_friend}>
         <img  className={cl.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"></img>
          {props.name}
      </div>
    )
}

const Nav = (props) => {
  let FriendsElemet = props.state.friendsData.map ( d =>  <FriendsItem name={d.name} id={d.id}/>);


    return (
      <nav className={cl.nav}>
        <div className={`${cl.item} ${cl.active}`}>
          <NavLink to='/profile' activeClassName={cl.active}>Profile</NavLink>
        </div>

        <div className={cl.item}>
          <NavLink to='/messages' activeClassName={cl.active}>Messages</NavLink>
        </div>

        <div className={cl.item}>
          <NavLink to='/myprojects' activeClassName={cl.active}>My projects</NavLink>
        </div>
      <br>
      </br>
        <div className={cl.item}>
          <NavLink to='/settings' activeClassName={cl.active}>Settings</NavLink>
        </div>

         <div className={cl.item__friends} >
            {FriendsElemet}
        </div>
    </nav>
    )
}

export default Nav;