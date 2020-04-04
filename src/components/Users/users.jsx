import React from 'react';
import style from './users.module.css';

let Users = (props) => {

    return (
        <div className={style.users}>
           { props.usersData.map( u => 

           <div key={u.id} className={style.users__shortlog} >
               <span className={style.users__AnB}>
                    <div >
                        <img className={style.avatar_img} src={u.photoUrl}/>
                    </div>
                    <div >
                        {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
                    </div>
               </span>

               <span className={style.users__status}>
                    <span className={style.users__status__profile}>
                        <div className={style.users__status__profile__name}>{u.fullName}</div>
                        <br/>
                        <div className={style.users__status__profile__status}>{u.status}</div>
                    </span>
                    <span>
                        <div className={style.users__status__location}>
                            {u.location.country} 
                            <br/>
                            {u.location.city}
                        </div>
                    </span>
               </span>

           </div> )}
        </div>
    )
}

export default Users;