import InstagramLogin from "react-instagram-login";

const responseInstagram = response => {
  console.log(response);
};

export default () => (
  <div>
    <div>💪</div>
    <InstagramLogin
      clientId="567e9dfbd8bd4f619be8f5665d0eef29"
      redirectUri={process.env.LOGIN_URL}
      buttonText="Login"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
    />
  </div>
);
