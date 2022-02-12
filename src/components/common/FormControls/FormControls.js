
import { Field } from "redux-form";
import styles from "./formControls.module.css"









export const Element=({input,meta:{touched,error},...props})=>{
    const hasError = touched && error ;

    return <div className={styles.formcontrol +" " + (hasError ? styles.error : "")} >
        <div>
        <props.elementType {...input} {...props}/>
        </div>
        {hasError && <span>{error}</span>}
    </div>

}
// const FormControl=({input,meta, child,element,...props})=>{
//     const hasError = meta.touched && meta.error ;

//     return <div className={styles.formcontrol +" " + (hasError ? styles.error : "")} >
//         <div>
//         <element {...input} {...props}/>
//         </div>
//         {hasError && <span>{meta.error}</span>}
//     </div>

// }

// export const Textarea = (props)=>{
//     const {input,meta, child,element,...restProps} = props

//     return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
// }


// export const Input = (props)=>{
    
//     const {input,meta, child,element,...restProps} = props

//     return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
// 

export const CreateField =(placeholder,name,validators,component,elementType)=>
    <div><Field placeholder={placeholder} name={name} validate={validators} component={component} elementType={elementType}/></div>
