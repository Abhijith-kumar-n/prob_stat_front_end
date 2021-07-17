import React from 'react';
import Api from "../../services/api";
import {SIGNUP_MESSAGES} from "../../consts/signUp";

export default class SignUp extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            phoneNo: '',
            email: '',
            password: ''
        }
    }
    saveUser = (e) => {
        e.preventDefault();

        console.log('user => ' + JSON.stringify(this.state));
        Api.Post(SIGNUP_MESSAGES.SIGNUP_PAGE_API_URL,this.state).then(res=> {
            console.log(JSON.stringify(res.data)+" "+"Registered Successfully");
            if (JSON.stringify(res.data)==="\"Registered Successfully\"") {
                this.props.history.push('/');
                window.location.reload();
            }
            else{
                alert(res.data);
            }
        });

    }
    changeHandler=e=>{
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return (
            <div className={"auth-wrapper auth-inner"} id={"signupbody"}>
                <form onSubmit={this.saveUser}>
                    <h3>{SIGNUP_MESSAGES.SIGNUP_PAGE_TITLE}</h3>

                    <div className="form-group">
                        <label>{SIGNUP_MESSAGES.SIGNUP_PAGE_USERNAME}</label>
                        <input type="text" className="form-control" placeholder="Username" name="userName"
                               onChange={this.changeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <label>{SIGNUP_MESSAGES.SIGNUP_PAGE_PHONENO}</label>
                        <input type="text" className="form-control" placeholder="Phone No" name="phoneNo"
                               pattern={"[789][0-9]{9}"} onChange={this.changeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <label>{SIGNUP_MESSAGES.SIGNUP_PAGE_EMAIL}</label>
                        <input type="email" className="form-control" placeholder="Enter email"  name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                               onChange={this.changeHandler}/>
                    </div>

                    <div className="form-group">
                        <label>{SIGNUP_MESSAGES.SIGNUP_PAGE_PASSWORD}</label>
                        <input type="password" className="form-control" placeholder="Enter password" name="password"
                               onChange={this.changeHandler} />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary btn-block">{SIGNUP_MESSAGES.SIGNUP_PAGE_SUBMIT_BUTTON}</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/signin">sign in?</a>
                    </p>
                </form>
            </div>
        );
    }
}