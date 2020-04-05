import React from 'react';
import style from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../img/user.png';

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }


        render() {

            let pagesCount = Math.ceil(100 / this.props.pageSize);

            let pages = [];
            for (let i=1; i <= pagesCount; i++) {
                pages.push(i);
            }

            return ( 
                
            <div className={style.all}>
                <div className={style.pagination}>
                    {pages.map( p => {
                        return <span className={ this.props.currentPage === p ? style.selectedPage : style.unselectedPage}
                        onClick={ (e) => { this.onPageChanged(p); }}> {p} </span>
                    })}
                </div>
                <div className={style.users}>
               {
                    this.props.users.map( u => 
                    <div key={u.id} className={style.users__shortlog} >
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
            </div>
            
        )
    }
}

export default Users;