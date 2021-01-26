import * as React from "react";
import "../style.css";
import { Redirect } from 'react-router-dom';
import {getApiCall } from './api/apiCalls';

class BookRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '', endDate: '', personCount: '1', roomCount: '1', typeOfRoom: '', errorMessage: '', message: '', redirect: null
    ,  roomType:[] }
  }

  //My New approach
  verifyFieldValues = (e) => {
    let field = e.target.name;
    let value = e.target.value;
    return this.setState({ [field]: value })
  }

  verifySubmit = (e) => {
    e.preventDefault();
    let strtDt = new Date(this.state.startDate);
    let endDt = new Date(this.state.endDate);
    let crtDt = new Date();

    // console.log('date 1', strtDt)
    // console.log('date 2', endDt)
    // console.log('Current Date', crtDt)
    // console.log('Match', strtDt > endDt? 'StartDate is greater': 'EndDate is greater')

    if (this.state.startDate !== '' && this.state.endDate !== '' && this.state.personCount !== '' && this.state.roomCount !== '' && this.state.typeOfRoom !== ''
          && (strtDt > crtDt && endDt > crtDt && strtDt < endDt && endDt > strtDt)){
        alert('Success')
        this.state.message = 'Thank you for Booking with Us, Wish you a happy Journey!';
        this.setState({ redirect: '/hotels' })
    } else {
      alert('Please recheck the dates entered!')
      this.state.errorMessage = 'Please See, all Fields are Mandatory!';
      return false;
    }
  }

  componentDidMount(){
    let config = { "Access-Control-Allow-Origin":"*","api_URL":"roomType"}
    getApiCall(config, (res)=>{
        console.log('Room Types',res.data);
       this.setState({roomType:res.data});
    })
}


  render() {
    //Redirect Machenism to home page
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    let roomTypes = this.state.roomType;

    return (<div className="wrapper-container">
      <div className="box">
        <button className="btn btn-small btn-danger pull-right" onClick={(e) => { this.setState({ redirect: '/hotels' }) }}> Back to Listing</button>
        <h1><span className="badge badge-pill badge-info">Book a Room</span></h1>
        <form className="form-group" onSubmit={this.verifySubmit}>
          <label className="textDecorator">Start Date</label>
          <input className="form-control" type="date" name="startDate" value={this.state.startDate} onChange={(e) => this.verifyFieldValues(e)} placeholder="mm/dd/yyyy" required />
          <label className="textDecorator">End Date</label>
          <input className="form-control" type="date" name="endDate" value={this.state.endDate} onChange={(e) => this.verifyFieldValues(e)} placeholder="mm/dd/yyyy" required />
          <label className="textDecorator">No. of Person</label>
          <input className="form-control" type="number" name="personCount" value={this.state.personCount} onChange={(e) => this.verifyFieldValues(e)} placeholder="Minimum person count is 1" required minLength="1" maxLength="5" />
          <label className="textDecorator">No. of Rooms</label>
          <input className="form-control" type="number" name="roomCount" value={this.state.roomCount} onChange={(e) => this.verifyFieldValues(e)} placeholder="Minimum countis 1" required minLength="1" maxLength="3" />
          <label className="textDecorator">Type of Room</label>
          <select className="form-control" name="typeOfRoom" required>
            {roomTypes.map(room => {
              return (<option key={room.id} value={room.roomType}>{room.roomType}</option>)
            })}
          </select>
          <br />
          <button className="btn btn-info" name="submit">Register Me</button>
        </form>
      </div>
    </div>)
  }
}

export default BookRoom;
