import InstagramLogin from "react-instagram-login";
import fetch from "isomorphic-unfetch";
import UserList from "../components/UserList";

const index = ({ users, user }) => {
  if (user) {
    return (
      <div>
        <h2>{user.username}</h2>
        <a href="#">
          <img src={user.photo} alt={user.username} className="ProfilePic" />
          <style jsx>{`
            .ProfilePic {
              border-radius: 50%;
            }
          `}</style>
        </a>
      </div>
    );
  }

  return (
    <div>
      <div>💪</div>
      <InstagramLogin
        clientId="567e9dfbd8bd4f619be8f5665d0eef29"
        redirectUri={process.env.LOGIN_URL}
        buttonText="Login"
      />

      <UserList users={users} />
    </div>
  );
};

index.getInitialProps = async ({ query: { username } }) => {
  if (username) {
    const res = await fetch(`${process.env.API_URL}/user_profile/${username}`);
    const json = await res.json();

    return { user: json };
  } else {
    const res = await fetch(`${process.env.API_URL}/users`);
    const json = await res.json();

    return { users: json };
  }
};

export default index;
