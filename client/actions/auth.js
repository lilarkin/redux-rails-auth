// browserHistory.push('/')
import { browserHistory } from 'react-router';

const logout = () => {
  return { type: 'LOGOUT' }
}

const login = (id) => {
  return { type: 'LOGIN', id }
}

export const handleLogin = (email, password) => {
  // make AJAX call to log user into app
  return(dispatch) => {
    $.ajax({
      url: '/users/sign_in',
      type: 'POST',
      dataType: 'JSON',
      data: { user: { email, password } }
    }).done(user => {
      dispatch(login(user.id));
      browserHistory.push('/');
    }).fail(data => {
      // TODO: handle this better!
      console.log(data);
    });
  }
}

export const handleLogout = () => {
  // make AJAX call to log user out of the apps
  return(dispatch) => {
    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data =>{
      dispatch(logout());
      browserHistory.push('/');
    }).fail( data => {
      console.log(data);
    })
  }
}

export const refreshLogin = () => {
  return(dispatch) => {
    $.ajax({
      url: '/api/user_info',
      type: 'GET',
      dataType: 'JSON'
    }).done( user => {
      if(user.id)
        dispatch(login(user.id))
      else
        dispatch(logout());
    }).fail( data => {
      console.log(data);
    })
  }
}

export const handleSignUp = (email, password, password_confirmation) => {
  return(dispatch) => {
    $.ajax({
      url: '/users',
      type: 'POST',
      dataType: 'JSON',
      data: {user: {email, password, password_confirmation } }
    }).done( user => {
      dispatch(login(user.id));
      browserHistory.push('/');
    }).fail( data => {
      alert(data.responseText);
    });
  }
}
