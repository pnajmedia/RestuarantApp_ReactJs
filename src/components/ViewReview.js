import * as React from "react";
import "../style.css";
import {Redirect} from 'react-router-dom';
import {getApiCall} from './api/apiCalls';

class ViewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {redirect:null, reviews:[]}
  }

  componentDidMount(){
    let config = { "Access-Control-Allow-Origin":"*","api_URL":"reviews"}
    getApiCall(config, (res)=>{
        console.log('reviews details',res.data);
       this.setState({reviews:res.data});
    })
}

  render() {

    let reviews = this.state.reviews;

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }


    return (<div className="wrapper-container">
      <h2><span className="badge badge-pill badge-success">Customer Reviews</span></h2>
      <button className="btn btn-danger" onClick={(e)=>{this.setState({redirect:'/hotels'})}}> Back to Listing</button>
      {reviews.map((rv) => {
        return (<div key={rv.id} className="box">
          <div className="badge badge-light">
            {rv.by} 	&nbsp;
            <div className="badge badge-success">
              Rating: &nbsp;{rv.rating} 
            </div>
          </div>
          <br />
          <div className="listing-image-container" >
           <pre className="textDecorator">
              {rv.review}
            </pre>
          </div>
        </div>)
      })}
    </div>)
  }
}

export default ViewReview;