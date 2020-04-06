import React, { Profiler } from 'react';
import style from './profileinfo.module.css';
import userPhoto from '../../../img/user.png';
import FindJob from '../../../img/FindJob.png';
import NotFindJob from '../../../img/NotFindJob.png';

const ProfileInfo = (props) => {
    return ( 
      <div className={style.ApD}>
        <div>
            <img className={style.avatar} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
        </div>

        <div className={style.descript}>
          <div className={style.descript__name}>
            {props.profile.fullName}
          </div>

          <div className={style.descript__about}>
            Статус: {props.profile.aboutMe != null ? props.profile.aboutMe : 'отсутствует'}
          </div>

          <div className={style.descript__work}>
            {props.profile.lookingForAJob 
              ? <div>
                  <div>I'm looking for work. {props.profile.lookingForAJobDescription}</div> 
                  <img src={FindJob} className={style.descript__img}/>
                </div> 
              : <div>
                <div> I'm not looking for work. </div>
                <img src={NotFindJob} className={style.descript__img}/> 
                </div> }
          </div>
          <div className={style.descript__contacts}>
            {props.profile.contacts.vk} 
          </div>
        </div>
      </div>
    )
  }

  export default ProfileInfo;