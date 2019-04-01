import fetch from "isomorphic-unfetch";

export default class Login extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const isServer = !!req;

    if (isServer && query.code) {
      const code = query.code;

      const response = await fetch(
        `${process.env.API_URL}/login?code=${code}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        }
      );

      const user = await response.json();

      return user;
    }
  }

  render() {
    return <div>Login {this.props.username}</div>;
  }
}
