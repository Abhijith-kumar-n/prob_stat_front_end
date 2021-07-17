import React from 'react';
import {LOGIN_MESSAGES} from "../../consts/login";
import Api from "../../services/api";
import {Link} from "react-router-dom";

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: ''
        }

    }
    login = (e) => {
        e.preventDefault();
        Api.Post(LOGIN_MESSAGES.LOGIN_PAGE_API_URL,this.state).then(res => {
            if (res.status===200) {
                if (res.data.authenticated) {
                    alert(LOGIN_MESSAGES.LOGIN_PAGE_SUCCESS);
                    sessionStorage.setItem(LOGIN_MESSAGES.LOGIN_PAGE_SESSION_KEY, res.data.userId)
                    this.props.history.push("/Mapping/");
                    window.location.reload();
                }
                else {
                    alert('Error Status '+res.status+' \n'+LOGIN_MESSAGES.LOGIN_PAGE_FAILURE);
                    window.location.reload();
                }
            }
        })

    }
    changeHandler= (event) => {
        this.setState({[event.target.name]: event.target.value});

    }
    render(){
        return (
            <div className={"auth-wrapper auth-inner"}>
                <form onSubmit={this.login}>
                    <Link to="/signUp">
                        <button className="btn btn-info float-right " id="getDataBtn">{LOGIN_MESSAGES.LOGIN_PAGE_SIGNUP_BUTTON}</button>
                    </Link>
                    <h1>{LOGIN_MESSAGES.LOGIN_PAGE_TITLE}</h1>

                    <div className="form-group">
                        <label>{LOGIN_MESSAGES.LOGIN_PAGE_USERNAME}</label>
                        <input type="text" className="form-control" placeholder="Enter Username"
                               name="userName" onChange={this.changeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <label>{LOGIN_MESSAGES.LOGIN_PAGE_PASSWORD}</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                               name="password" autoComplete={"false"} onChange={this.changeHandler} />
                    </div>

                    <br/>
                    <button type="submit" className="btn btn-primary btn-block">{LOGIN_MESSAGES.LOGIN_PAGE_SUBMIT_BUTTON}</button>
                </form>
            </div>
        )
    }
}