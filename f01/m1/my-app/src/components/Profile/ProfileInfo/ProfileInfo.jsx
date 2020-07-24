import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://i.ytimg.com/vi/xEMpfZfg76w/maxresdefault.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>);
}
export default ProfileInfo;