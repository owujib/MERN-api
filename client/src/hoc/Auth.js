import React from 'react';

export default function Auth(WrappedComponent) {
  function AuthenticationCheck(props) {
    let t = localStorage.getItem('auth_token');
    return <WrappedComponent {...props} token={t} />;
  }
  return AuthenticationCheck;
}
