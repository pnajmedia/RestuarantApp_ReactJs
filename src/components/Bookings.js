import * as React from "react";
import "../style.css";
import { Redirect } from 'react-router-dom';

class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '', endDate: '', errorMessage: '', message: '', redirect: null
    }
  }

  verifyDateChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value })
  }

  verifySubmit = (e) => {
    e.preventDefault();
    let strtDt = new Date(this.state.startDate);
    let endDt = new Date(this.state.endDate);
    let crtDt = new Date();

    if (this.state.startDate !== '' && this.state.endDate !== '' &&
      (strtDt > crtDt && endDt > crtDt && strtDt < endDt && endDt > strtDt)) {
      alert('Hurray, Rescheduled Successfully!')
      this.state.message = 'Hurray, Success';
      this.setState({ redirect: '/hotels' })

    } else {
      alert('Please review the filled dates again!')
      this.state.errorMessage = 'Please See, all Fields are Mandatory!';
    }
  }


  render() {
    //Redirect Machenism to home page
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (<div className="wrapper-container">
      <div className="box">
        <button className="btn btn-small btn-danger pull-right" onClick={(e) => { this.setState({ redirect: '/hotels' }) }}> Back to Listing</button>
        <h1><span className="badge badge-pill badge-secondary">Reschedule a booking</span></h1>
        <form className="form-group" onSubmit={this.verifySubmit}>
          <label className="textDecorator">Start Date</label>
          <input className="form-control" type="date" name="startDate" value={this.state.startDate} onChange={(e) => this.verifyDateChange(e)} placeholder="mm/dd/yyyy" required />
          <label className="textDecorator">End Date</label>
          <input className="form-control" type="date" name="endDate" value={this.state.endDate} onChange={(e) => this.verifyDateChange(e)} placeholder="mm/dd/yyyy" required />
          <br />
          <button className="btn btn-info" name="submit">Reschedule</button>
        </form>
      </div>
    </div>)
  }

}

export default Bookings;