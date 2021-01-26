import * as React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import { getApiCall } from './api/apiCalls'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            useName: '',
            password: '',
            errorMessage: '',
            message: 'Please See, Both Fields are Mandatory!',
            redirect: null,
            auth:null
        }
    }

    //My New approach
    verifyFieldValues = (e) => {
        let field = e.target.name;
        let value = e.target.value;
        return this.setState({ [field]: value })
    }

    verifySubmit = event => {
        event.preventDefault();

        var config = { "Access-Control-Allow-Origin": "*" ,"api_URL":"users"}
        getApiCall(config, (res) => {
            console.log('api outer reponse', res.data)
            var auth = res.data.find(val => val.username === this.state.useName && val.password === this.state.password);
            this.setState({auth:auth})
            if (this.state.useName !== '' && this.state.password !== '' && this.state.auth) {
                alert( 'Welcome! ' + this.state.useName)
                return this.setState({redirect:'/home'});
            } else {
                this.state.errorMessage = 'Please enter correct details';
            }
        }, (err) => { alert(err) })
    }

    render() {

        if (this.state.redirect) {
            console.log('route', this.state.redirect);
            return <Redirect to={this.state.redirect} />

        }

        return (<div className="wrapper-container">
            <div class="box">
                <h1><span class="badge badge-pill badge-success">Sign In - bonstay</span></h1>
                <form className="form-group" onSubmit={this.verifySubmit}>
                    <label className="textDecorator">Username</label>
                    <input className="form-control" type="text" name="useName" value={this.state.useName} onChange={(e) => this.verifyFieldValues(e)} placeholder="Enter your User Name" />
                    <label className="textDecorator">Password</label>
                    <input className="form-control" type="password" name="password" value={this.state.password} onChange={(e) => this.verifyFieldValues(e)} placeholder="Enter your Password" />
                    <br />
                    <button className="btn btn-lg btn-info" name="submit">Submit</button>
                </form>
                <button className="form-control btn btn-sm btn-success" name="signUp" onClick={(e) => this.setState({ redirect: "/signUp" })}>New user? Signup</button>
            </div>

        </div>)
    }
}

export default Login;
