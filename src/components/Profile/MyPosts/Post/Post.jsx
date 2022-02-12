import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <div className={s.sip}><img alt ="" src='data:image/jpeg;base64,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' />
            </div>
            {props.message}
            <div><span>{props.lcount} likes</span></div>
        </div>


        
    )
};
export default Post;