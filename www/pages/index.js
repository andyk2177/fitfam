import InstagramLogin from "react-instagram-login";
import fetch from "isomorphic-unfetch";
import UserList from "../components/UserList";
import Link from "next/link";
import Layout from "../components/Layout";

const index = ({ users, user }) => {
  if (user) {
    return (
      <Layout>
        <div className="UserProfile">
          <div className="center">
            <a href="#">
              <img
                src={user.photo}
                alt={user.username}
                className="ProfilePic"
              />
            </a>

            <h2>{user.username}</h2>

            <iframe
              src={user.profile_song}
              width="300"
              height="80"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </div>

          <div className="UserWorkouts">
            {user.workouts.map(workout => (
              <div>
                <div key={workout.id}>{workout.name}</div>
                <ul>
                  {workout.exercises.map(exercise => (
                    <li key={exercise.id}>
                      {exercise.name} {exercise.weight} x {exercise.reps}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .UserProfile {
            max-width: 800px;
            margin: 0 auto;
          }
          .center {
            text-align: center;
          }
          .ProfilePic {
            border-radius: 50%;
          }
        `}</style>
      </Layout>
    );
  }

  return (
    <Layout>
      <Link href="/about">about</Link>
      <InstagramLogin
        clientId="567e9dfbd8bd4f619be8f5665d0eef29"
        redirectUri={process.env.LOGIN_URL}
        buttonText="Login"
      />

      <UserList users={users} />
    </Layout>
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
