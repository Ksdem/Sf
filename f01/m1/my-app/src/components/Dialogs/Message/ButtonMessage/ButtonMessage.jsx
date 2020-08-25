import React from "react";
import s from './ButtonMessage.module.css'

const ButtonMessage=({onClick, name})=>{
    return  (
        <div className={s.button} onClick={onClick}>
            <button>
                {name}
            </button>

        </div>
        );

}

export default ButtonMessage;