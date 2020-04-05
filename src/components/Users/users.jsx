import React from 'react';
import style from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../img/user.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

        render() {
            return ( 
            <div className={style.users}>
               {
                    this.props.users.map( u => <div key={u.id} className={style.users__shortlog} >
                   <span className={style.users__AnB } >
                        <div >
                            <img className={style.avatar_img} src={ u.photos.small != null ? u.photos.small : userPhoto }/>
                        </div>
                        <div >
                            {u.followed
                            ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {this.props.follow(u.id)}}>Follow</button> 
                            }
                        </div>
                   </span>
    
                   <span className={style.users__status}>
                        <span className={style.users__status__profile}>
                            <div className={style.users__status__profile__name}>{u.name}</div>
                            <br/>
                            <div className={style.users__status__profile__status}>{u.status}</div>
                        </span>
                        
                        <span>
                            <div /* className={style.users__status__location} */>
                                {"u.location.country"}
                                <br/>
                                {"u.location.city"}
                            </div>
                        </span>
                   </span>
    
               </div> )}
            </div>
        )
    }
}

export default Users;