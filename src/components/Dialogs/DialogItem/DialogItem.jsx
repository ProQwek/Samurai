import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'




    const DialogItem=(props)=>{
        return(
            <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{ props.name}<div><img src="{props.img}"></img></div></NavLink>
         </div>
        
        );
        
        
        }
export default DialogItem;