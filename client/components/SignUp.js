import React from 'react';
import { Link } from 'react-router';
import { handleSignUp } from '../actions/auth';
import { connect } from 'react-redux';

class SignUp extends React.Component {
   handleSubmit = (e) => {
    e.preventDefault();
    //this is where we do our ajax call - WITHOUT REDUX
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let password_confirmation = this.refs.password_confirmation.value;
    this.props.dispatch(handleSignUp(email, password, password_confirmation));
  }

  render() {
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input ref='email' type='text' required placeholder='Email' />
          <br />
          <input ref='password' type='password' required placeholder='Password' />
          <br />
          <input ref='password_confirmation' type='password' required placeholder='Confirm Password' />
          <br />
          <input type='submit' className='btn' value='Submit' />
          <Link to='/login' className='btn grey'>Cancel</Link>
        </form>
      </div>
    )
  }
}

export default connect()(SignUp);