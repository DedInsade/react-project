import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav';


let mapStateToProps = (state) => {
  return {
      friendsData: state.sidebar.friendsData,
  }
}



const NavContainer = connect(mapStateToProps) (Nav);


export default NavContainer;