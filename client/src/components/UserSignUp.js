import React from 'react'

const UserSignUp = () => {
  return (
    <div>UserSignUp</div>
  )
  submit = () => {
    const { context } = this.props;

    const {
      name,
      username,
      password,
    } = this.state;

    const user = {
      name,
      username,
      password,
    };
    context.data.createUser(user)
      .then( errors => {
        if (errors.length) {
          this.setState({ errors });
        } else {
          console.log(`${username} is successfully signed up and authenticated!`);
        }
      })
      .catch( err => {
        console.log(err);
        //pushes to history stack
        this.props.history.push('/error');
      });
  }

  cancel = () => {
    this.props.history.push('/');
  }








}

export default UserSignUp