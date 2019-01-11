import React, { Component } from 'react';
import { connect } from "react-redux";
import { signIn } from '../../store/actions/authActions';

export class SignedIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signIn({
      [event.target.id]: event.target.value
    });
  }

  render() {
    const authError = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
    )
  }
}

// To have access to `authError` inside our component inside the props
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
};

// To make dispatch from this component and call `signIn` action
// so we can access signIn method from our props
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn);
