import React from 'react';
import style from './users.module.css';
import userPhoto from '../../img/user.png';
import Preloader from '../common/preloader';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../../api/api';


let Users = (props) => {

    let pagesCount = Math.ceil(60 / props.pageSize);

            let pages = [];
            for (let i=1; i <= pagesCount; i++) {
                pages.push(i);
            }

    return (
        <div className={style.all}>
                <div className={style.pagination}>
                    {pages.map( p => {
                        return <div className={ props.currentPage === p ? style.selectedPage : style.unselectedPage}
                        onClick={ (e) => { props.onPageChanged(p); }}> {p} </div>
                    })}
                </div>

                {props.isFetching ? <Preloader /> :
                <div className={style.users}>
               {
                    props.users.map( u => 
                    <div key={u.id} className={style.users__shortlog} >
                    <span className={style.users__AnB } >
                        <div >
                            <NavLink to={"/profile/" + u.id}>
                                <img className={style.avatar_img} src={ u.photos.small != null ? u.photos.small : userPhoto }/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed 
                            ? <button className={style.users__AnB__button} onClick={() => {

                                usersAPI.unfollow(u.id).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                });

                            }}>Unfollow</button>

                            : <button className={style.users__AnB__button} onClick={() => {

                               usersAPI.follow(u.id).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                    });
                                    

                            }}>Follow</button>}

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
            }
            </div>
        )
}

export default Users;
