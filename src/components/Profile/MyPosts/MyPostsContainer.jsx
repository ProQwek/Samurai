import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";







// const MyPostsContainer = () => {



// return <StoreContext.Consumer>
//    {
//       (store) => {
//          let state = store.getState();
//          let addsPost = () => {

//             store.dispatch(addPostActionCreator());

//          };
//          let onPostChange = (text) => {

//             store.dispatch(updateNewPostTextActionCreator(text));
//          };
//          return <MyPosts updateNewPostText={onPostChange} addsPost={addsPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
//       }
//    }
//    </StoreContext.Consumer>


// }

let mapStateToProps = (state)=>{
return{
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
}
}
let mapDispatchToProps=(dispatch)=>{
return{
   
   addsPost:(newPost)=>{ dispatch(addPostActionCreator(newPost));}

}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;