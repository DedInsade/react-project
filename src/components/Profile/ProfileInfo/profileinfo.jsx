import React, { Profiler } from 'react';
import style from './profileinfo.module.css';


const ProfileInfo = (props) => {
    return (
      <div className={style.ApD}>
        <div>
            <img className={style.avatar} src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
        </div>

        <div className={style.descript}>
            ava+descriptiton
        </div>
      </div>
    )
  }

  export default ProfileInfo;