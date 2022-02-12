import {Field, reduxForm} from "redux-form";
import { Element } from "../../common/FormControls/FormControls";
import { maxLengthCreator,required } from "../../../utils/validators/validators";
import React from "react";


const maxLength20 = maxLengthCreator(20);
export const AddMessageForm=({input,meta,...props})=>{
    return <form onSubmit={props.handleSubmit}>
    <div>
    <Field component={Element} elementType='textarea' validate={[required,maxLength20]} name ="newMessageBody" placeholder="Enter your message" />
    </div>
    
    <div>
    <button > Add Message</button>
    
    </div>
    </form>
}
 const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);
 export default AddMessageFormRedux;