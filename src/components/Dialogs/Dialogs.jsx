import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength15, maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormControls/FormControls';
import AddMessageFormRedux, { AddMessageForm } from './AddMessageForm/AddMessageForm';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';







const Dialogs = (props) => {

//let store= props.store;
//let state= props.store.getState().dialogsPage;

// let addMessage=()=>{
//     props.addMessage();
//     //props.store.dispatch(addMessageActionCreator());
        
//     }
// let onMessageChange=(e)=>{
//     let text = e.target.value;
//     props.updateNewMessageText(text)
//    // store.dispatch(updateNewMessageTextActionCreator(text));}
    
    


let addNewMessage=(values)=>{
    console.log(values.newMessageBody)
    props.addMessage(values.newMessageBody);
}

 <DialogItem />  
 
        let dialogElements = props.dialogs.map (d => <DialogItem name={d.name} key = {d.id} id={d.id} img={d.img}/> );

 <Message />
   
    let messagesElemets = props.messages.map( m=> <Message messages={m.message} key={m.id}/> );
   

    return (
        
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
 </div>

 <div className={s.messages}>
            {messagesElemets}
           <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>


        </div>



    )


}
export default Dialogs;


// const maxLength20 = maxLengthCreator(20);
// const AddMessageForm=(props)=>{
//     return <form onSubmit={props.handleSubmit}>
//     <div>
//     <Field component={Textarea} validate={[required,maxLength20]} name ="newMessageBody" placeholder="Enter your message" />
//     </div>
    
//     <div>
//     <button > Add Message</button>
    
//     </div>
//     </form>
// }
// const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);