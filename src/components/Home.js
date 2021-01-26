import * as React from "react";
import "../style.css";

class Home extends React.Component {
  render() {
    return (<div className="wrapper-container">
      <div class="box">
        <p><blockquote className="textDecorator">
          Welcome to <b>bonstay</b>,<br /><br />
          Hospitality is making your guests feel at home, even if you wish they were.
          <br /><br />
          Wish you, a happy stay!
          </blockquote></p>
      </div>
    </div>)
  }
}

export default Home;
