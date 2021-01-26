import * as React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', address: '', phoneNo: '', password: '', email: '', errorMessage: '', message: '',
            emailPattern: ".+@gmail.com", redirect: null
        }
    }

    // My old approach
    // verifyNameChange=(e)=>{
    //     return this.setState({name:e.target.value})
    // }

    // verifyaddressChange =(e)=>{
    //     return this.setState({address:e.target.value})
    // }
    // verifyPhoneNoChange =(e)=>{
    //     return this.setState({phoneNo:e.target.value})
    // }
    // verifyeEmailChange =(e)=>{
    //     return this.setState({email:e.target.value})

    // }
    // verifyPasswordChange =(e)=>{
    //     return this.setState({password:e.target.value})
    // }

    //My New approach
    verifyFieldValues = (e) => {
        let field = e.target.name;
        let value = e.target.value;
        return this.setState({ [field]: value })
    }

    verifySubmit = (e) => {
        e.preventDefault();
        if (this.state.name !== '' && this.state.address !== '' && this.state.phoneNo !== '' && this.state.password !== '' && this.state.email !== '') {
            this.state.message = 'Hurray, Success';
            this.setState({ redirect: '/home' })

        } else {
            this.state.errorMessage = 'Please See, all Fields are Mandatory!';
        }
    }

    render() {
        //Redirect Machenism to home page
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (<div className="wrapper-container">
            <div class="box">
                <h1><span class="badge badge-pill badge-info">Sign Up - Bonstay</span></h1>
                <a href="/" class="badge badge-pill badge-warning pull-right">Already signedUp? Login</a>
                <form className="form-group" onSubmit={this.verifySubmit}>
                    <label className="textDecorator">Name</label>
                    <input className="form-control" type="text" name="name" value={this.state.name} onChange={(e) => this.verifyFieldValues(e)} placeholder="Enter your Full Name" required minLength="3" />
                    <label className="textDecorator">Address</label>
                    <textarea className="form-control" type="test" name="address" value={this.state.address} onChange={(e) => this.verifyFieldValues(e)} placeholder="Enter your Address" required />
                    <label className="textDecorator">Phone Number</label>
                    <input className="form-control" type="text" name="phoneNo" value={this.state.phoneNo} onChange={(e) => this.verifyFieldValues(e)} placeholder="Enter your Phone Number (10 Digits)" required minLength="10" maxLength="10" />
                    <label className="textDecorator">Email</label>
                    <input className="form-control" type="email" name="email" value={this.state.email} onChange={(e) => this.verifyFieldValues(e)} placeholder="Enter Email (Only Gmail allowed)" required pattern={this.state.emailPattern} size="30" />
                    <label className="textDecorator">Password</label>
                    <input className="form-control" type="password" name="password" value={this.state.password} onChange={(e) => this.verifyFieldValues(e)} placeholder="Enter your Password" required minLength="8" maxLength="12" />
                    <br />
                    <button className="btn btn-info" name="submit">Register Me</button>
                </form>
            </div>

        </div>)
    }
}

export default Signup;
