import React from 'react';
import axios from 'axios';

const Auth = (WrappedComponent, reload, adminRoute = null) => {
  class Auth extends React.Component {
    // ...
    state = {
      user: {},
      loading: true,
    };
    componentDidMount() {
      axios
        .get('http://localhost:4000/api/user/profile', {
          headers: {
            auth_token: `${localStorage.getItem('auth_token')}`,
          },
        })
        .then((res) => {
          console.log(!res.data.isAuth);
          if (!res.data.isAuth) {
            if (reload) {
              this.props.history.push('/login');
              console.log(reload);
            }
          } else {
            if (adminRoute) {
              this.props.history.push('/');
              console.log(adminRoute);
            } else {
              if (reload === false) {
                this.props.history.push('/');
                console.log('na me');
              }
            }
          }
        })
        .catch((err) => console.log(err));
    }
    render() {
      const { user, loading } = this.state;

      return <WrappedComponent results={user} />;
    }
  }

  return Auth;
};

export default Auth;

// const Auth = (WrappedComponent, reload, adminRoute = null) => (
//   WrappedComponent,
//   reload,
//   adminRoute = null
// ) => {

// export default class Auth extends React.Component {
//   constructor() {
//     super();
//   }
//   // static Authentication(WrappedComponent) {
//   //   axios
//   //     .get('http://localhost:4000/api/user/profile')
//   //     .then((res) => {
//   //       return res.data;
//   //     })
//   //     .catch((err) => console.log(err));
//   // }

//   render() {
//     let t = localStorage.getItem('auth_token');
//     return (
//       <div>
//         <h1>jj</h1>{' '}
//       </div>
//     );
//   }
// }
