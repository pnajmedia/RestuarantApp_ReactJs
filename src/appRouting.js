import React from "react";
import Bookings from "./components/Bookings";
import Home from "./components/Home";
import HotelsList from "./components/HotelsList";
import Login from "./components/Login";
import BookRoom from "./components/BookRoom";
import AddReview from "./components/AddReview";
import ViewReview from "./components/ViewReview";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from "./components/SignUp";

class appRouting extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() { }

    render() {
        return (<Router>
            <nav className="navbar navbar-inverse navbar-dark bg-info">
                <div className="navbar navbarNav">
                    <Link to="/home" className='logo'></Link>
                </div>
                <div className="navbar navbarRight">
                    <Link className="navbar-brand" to="/home">Home</Link>
                    <Link className="navbar-brand" to="/hotels">Hotels</Link>
                    <Link className="navbar-brand" to="/bookings">Bookings</Link>
                    <Link className="navbar-brand" to="/login">Logout</Link>
                </div>
            </nav>
            <div className="row-flexible" id="bonBg">
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/signUp" component={Signup} />
                <Route path="/hotels" component={HotelsList} />
                <Route path="/bookings" component={Bookings} />
                <Route path="/bookRoom" component={BookRoom} />
                <Route path="/addReview" component={AddReview} />
                <Route path="/viewReview" component={ViewReview} />
                <Route path="/login" component={Login} />
            </div>
        </Router>)
    }
}

export default appRouting;