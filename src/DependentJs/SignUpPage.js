import React, {Component} from "react";
import UserService from '../services/UserService';

class SignUpPage extends Component {
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

         UserService.createUser(this.state).then(res=> {
             alert(String.valueOf(res));
             if (res==="Registered Successfully"){
                 this.props.history.push('/sign-in');
             }


         });

    }
    changeHandler=e=>{
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return (

            <form onSubmit={this.saveUser}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" name="userName"
                         onChange={this.changeHandler} required
                    />
                </div>

                <div className="form-group">
                    <label>Phone No</label>
                    <input type="text" className="form-control" placeholder="Phone No" name="phoneNo"
                    pattern={"[789][0-9]{9}"} onChange={this.changeHandler} required
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"  name="email"
                           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.changeHandler} required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password"
                     onChange={this.changeHandler} required/>
                </div>
                  <br/>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}


export default SignUpPage;