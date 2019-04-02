import InstagramLogin from "react-instagram-login";
import fetch from "isomorphic-unfetch";
import UserList from "../components/UserList";

const responseInstagram = response => {
  console.log(response);
};

const index = ({ users }) => (
  <div>
    <div>💪</div>
    <InstagramLogin
      clientId="567e9dfbd8bd4f619be8f5665d0eef29"
      redirectUri={process.env.LOGIN_URL}
      buttonText="Login"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
    />

    <UserList users={users} />
  </div>
);

index.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/users`);
  const json = await res.json();

  return { users: json };
};

export default index;
