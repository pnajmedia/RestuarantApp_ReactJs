import * as React from "react";
import "../style.css";
import { Redirect } from 'react-router-dom';

class AddReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = { redirect: null, review: null }
  }

  addedReview =(e)=>{
    e.preventDefault();
    if(this.state.review !== null){
      alert('Thnak you for your valuebale feedback!')
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (<div className="wrapper-container">
      <h2><span class="badge badge-pill badge-success">Give your Reviews</span></h2>
      <button class="btn btn-danger" onClick={(e) => { this.setState({ redirect: '/hotels' }) }}> Back to Listing</button>
      <div class="box">
        <form onSubmit={this.addedReview} method="GET">
          <textarea required name="reviews" value={this.state.review} style={{ width: '100%' }} onChange={(e) => this.setState({ review: e.target.value })} placeholder="Please share your valuable feebdack here.." maxLength="250"/>
          <button type="submit" className="btn btn-sm btn-success pull-right">Submit</button>
        </form>
      </div>
    </div>)
  }
}

export default AddReview;