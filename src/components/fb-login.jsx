import React, { useEffect, useState } from 'react';


const FBLogin = () => {

  const [responceData, setResponceData] = useState('');

  useEffect(() => {
    // Initialize Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '681382954269968', // Replace with your Facebook App ID
        cookie: true,
        xfbml: true,
        version: 'v19.0',
      });
    };
  }, []);

  const handleLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          console.log('Successfully logged in', response);
          // Access token is available here
          const accessToken = response.authResponse.accessToken;
          getUserData(accessToken);
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      },
      { scope: 'public_profile,email' }
    );
  };

  const getUserData = (accessToken) => {
    // Fetch user profile data with the access token
    window.FB.api('/me', { fields: 'id,name,email,birthday' }, (response) => {
      console.log('User profile data:', response);
      setResponceData(response);
    });
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        onClick={handleLogin}
      >
        Login with Facebook
      </button>
      <p>{responceData.name}</p>
    </div>
  );
};

export default FBLogin;
