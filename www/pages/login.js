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

      const result = await response.json();

      console.log(result);

      return result;
    }
  }

  render() {
    console.log(this.props);
    return <div>Login</div>;
  }
}
