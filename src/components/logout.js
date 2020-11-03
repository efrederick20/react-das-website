import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '812803749316-3bpisa4pcto49mnrprg0dug3b8hnlji9.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;