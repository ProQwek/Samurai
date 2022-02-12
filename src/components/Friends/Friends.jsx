import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Friends.module.css'





const Friends = (props) => {



const onchanged =(e)=> {
console.log(e.currentTarget.value)
}



return(
 <div>

Friends

<div>
<input onChange={onchanged} ></input>
        
</div>
        </div>





)
}
export default Friends;