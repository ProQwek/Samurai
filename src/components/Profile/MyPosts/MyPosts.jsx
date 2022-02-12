import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength15, maxLengthCreator, required } from "../../../utils/validators/validators";
import { Element, Textarea } from "../../common/FormControls/FormControls";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = React.memo(props=>{
    // shouldComponentUpdate(nextProps, nextState){
    //     return nextProps !=this.props || nextState!=this.props;
    // }
console.log("render");
    // let newPostElement = React.createRef();
    let addsPost=(value)=>{
        props.addsPost(value.newPost);
       //props.dispatch(addPostActionCreator());    
    };
// let onPostChange=()=>{
//     let text = newPostElement.current.value;
//    props.updateNewPostText(text);
  // let action = {type:'UPDATE-NEW-POST-TEXT', newText: text}
   //props.dispatch(updateNewPostTextActionCreator(text));
// }

let postElements = props.posts.map(p=><Post message = {p.message} lcount={p.lcount}/>);

    return (
        
            <div className={s.postsBlock}>
               <h3>My posts</h3>
                <div>
                 <AddPostReduxForm onSubmit={addsPost} />
                </div>
                <div className={s.posts}>
                    {postElements}
                  
                </div>
            </div>
    )
});
export default MyPosts;

const maxLength10 = maxLengthCreator(10);

const AddPostForm=(props)=>{
    return <form onSubmit={props.handleSubmit}>
    <div>
    <Field component={Element} elementType="textarea" name ="newPost" placeholder="Enter your post"  validate= {[required,maxLength10]}/>
    </div>
    <div>
    <button > Add Post</button>
    
    </div>
    </form>
}
const AddPostReduxForm = reduxForm({form:"addPostForm"})(AddPostForm);