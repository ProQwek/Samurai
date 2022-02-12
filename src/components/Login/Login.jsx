import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { CreateField, Element, Input } from "../common/FormControls/FormControls";
import styles from "../common/FormControls/formControls.module.css"
import {connect} from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate, NavLink} from "react-router-dom";







const LoginForm = ({handleSubmit,error}) =>{

    return <form onSubmit={handleSubmit}>
            {/* <div> */}
                {CreateField("Email","email",[required],Element,"input")}
                {/* <Field placeholder={"Email"} name={"email"} validate={[required]} component={Element} elementType="input"/>
                </div> */}
            <div>
                <Field placeholder={"Password"} validate={[required]} name ={"password"} type ={"password"}component={Element} elementType="input"/>
                </div>
            <div>
                <Field component={Element} elementType="input" name={"remeberme"} type={"checkbox"}/>remember me
                </div>
                {error &&<div className={styles.formsummaryerror}>{error}</div>}
            <div>
                <button>Login</button>
                </div>
        </form>
    
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) =>{
const onSubmit=(formData)=>{
props.login(formData.email, formData.password, formData.rememberMe)
}
if (props.isAuth){ return <Navigate to="/profile" />}
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps=(state)=>({
isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login);