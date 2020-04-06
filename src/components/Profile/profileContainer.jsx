import React, { Profiler } from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import * as axios from 'axios';
import Preloader from '../common/preloader';

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/6891`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
  }

  render() {
  return (
      <div>
        { !this.props.profile ? <Preloader /> 
          : <Profile {...this.props} profile={this.props.profile} />
        }
    </div>
    )
}
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);