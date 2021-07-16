import React, {Component} from "react";
import {useHistory} from 'react-router-dom';
import Api from '../services/api';
import {LOGIN_MESSAGES} from '../consts/login';
const history = useHistory;
export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            
            userName: '',
            password: ''
        }
        this.saveUser = this.login.bind(this);
    }


    login = (e) => {
        e.preventDefault();
        Api.Post(LOGIN_MESSAGES.LOGIN_PAGE_API_URL,this.state).then(res => {
            if (res.status===200) {
                if (res.data.authenticated) {
                    alert(LOGIN_MESSAGES.LOGIN_PAGE_SUCCESS);
                    sessionStorage.setItem("userId", res.data.userId)
                    this.props.history.push("/Mapping/");
                    location.reload();
                }
                else {
                    alert('Error Status '+res.status+' \n'+LOGIN_MESSAGES.LOGIN_PAGE_FAILURE);
                    location.reload();
                }
            }
        })

    }
    changeHandler= (event) => {
        this.setState({[event.target.name]: event.target.value});

    }
    
    render() {
        return (
            
            <form>
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
                <button type="submit" onClick={this.login} className="btn btn-primary btn-block">{LOGIN_MESSAGES.LOGIN_PAGE_SUBMIT_BUTTON}</button>
            </form>
        );
    }
}