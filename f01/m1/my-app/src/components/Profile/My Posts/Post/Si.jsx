import React from 'react';
import q from './Si.module.css';

const Si = (props) => {
    return (
        <div className={q.si}>
            <img src='https://i.pinimg.com/originals/11/ab/14/11ab147894a7d2ce866ff88a4aa63655.jpg'/>
            {props.si}
           <div> <span>Like</span> {props.LikesCount}</div>

        </div>);

}
export default Si;