import React, { Component } from "react";
import UserService from '../services/UserService';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const history = useHistory;
export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            
            username: '',
            password: ''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveUser = this.login.bind(this);
    }


    login = (e) => {

        e.preventDefault();
        let user = { "userName": this.state.username,"password": this.state.password};
        console.log('user => ' + JSON.stringify(user));
        let xhr=new XMLHttpRequest();
        let url = "http://localhost:9095/users/login";
        xhr.open("POST", url, false);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin","*");
        console.log("str --> "+JSON.stringify(user));
        xhr.send(JSON.stringify(user));
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            alert(xhr.responseText);
            localStorage.setItem("userId",JSON.stringify(JSON.parse(xhr.responseText).userId));
        }
        let response=JSON.parse(xhr.responseText);
        console.log(response)
        if(response.authenticated===true){
            // this.props.history.push("/Mapping");
            console.log("in if true")
            this.props.history.push("/Mapping/" );
            location.reload();
        }
        else{
            this.props.history.push("/");
            location.reload();
        }
         // UserService.loginUser(user).then(res=> {
         //     this.props.history.push('/home');
         //
         // });

    }
    changeUsernameHandler= (event) => {
        this.setState({username: event.target.value});

    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    
    render() {
        return (
            
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter Username" 
                        name="username"
                        value={this.state.username} onChange={this.changeUsernameHandler}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                    name="password"
                    value={this.state.password} onChange={this.changePasswordHandler} />
                </div>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}
               <br/>
                <button type="submit" onClick={this.login} className="btn btn-primary btn-block">Login</button>
                {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
            </form>
        );
    }
}