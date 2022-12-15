import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

/**
 * Signs out the authenticated user and redirects the user to the default route 
 */
const UserSignOut = ({context}) => {

  useEffect(() => {
    context.actions.signOut();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Redirect to="/" />
  );
}

export default UserSignOut;