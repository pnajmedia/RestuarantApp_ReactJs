import * as React from "react";
import resort from '../images/resort.jpg';
import { Redirect } from 'react-router-dom';
import {getApiCall} from './api/apiCalls';

class HotelsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { redirect: null, hotelDEtails:[] }
    }

    //My New approach
    verifyFieldValues = (e) => {
        let field = e.target.name;
        let value = e.target.value;
        return this.setState({ [field]: value })
    }

    bookRoom =(e) =>{
        return this.setState({redirect:'/bookRoom'})
    }

    addReview = (e) =>{
        return this.setState({redirect:'/addReview'})
    }

    viewReview = (e) =>{
        return this.setState({redirect:'/viewReview'})
    }

    componentDidMount(){
        let config = { "Access-Control-Allow-Origin":"*","api_URL":"hotelDEtails"}
        getApiCall(config, (res)=>{
            console.log('hotel details',res.data);
           this.setState({hotelDEtails:res.data});
        })
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        
        let hotelDEtails = this.state.hotelDEtails;

        return (<div className="wrapper-container">
            {hotelDEtails.map((hotel) => {
                return (<div key={hotel.id} className="box">
                    <div className="badge badge-light">
                        {hotel.hotelName} 	&nbsp;
                    <div className="badge badge-dark">
                            &nbsp;{hotel.address} 	&nbsp; | &nbsp; {hotel.phone}
                        </div>
                    </div>
                    <br />
                    <div className="listing-image-container" >
                        <img src={resort} className="listing-image" />
                        <div className="listingButtons">
                            <button className="btn btn-sm btn-success" style={{ marginBottom: '5px' }} onClick={e=>this.bookRoom(e)} >Book a Room</button>
                            <button className="btn btn-sm  btn-primary" style={{ marginBottom: '5px' }} onClick={e=>this.addReview(e)} >Add a Review</button>
                            <button className="btn btn-sm  btn-warning" style={{ marginTop: '5px' }} onClick={e=> this.viewReview(e)} >View Review</button>
                        </div>
                    </div>
                </div>)
            })}
        </div>)
    }
}

export default HotelsList;