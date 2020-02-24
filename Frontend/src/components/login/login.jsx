import React from "react";
import loginImg from "../../login.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
          <form method='POST' action='/login'>
                <div className="forms">
              <label htmlFor="e-mail">E-Mail</label>
              <input type="text" name="e-mail" placeholder="E-Mail" />
            </div> 
                <br/>  
                <div className="forms">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div> 
                <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
              </form>
           
        </div>
        
      </div>
      </div>
    );
  }
}
