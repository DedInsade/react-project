import React from 'react';
import cl from'./nav.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './nav';


let mapStateToProps = (state) => {
  return {
      friendsData: state.sidebar
  }
}

const NavContainer = connect(mapStateToProps) (Nav);


export default NavContainer;