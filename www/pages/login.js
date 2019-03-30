import fetch from "isomorphic-unfetch";

export default class Login extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const isServer = !!req;

    if (isServer && query.code) {
      const code = query.code;

      const response = await fetch(`${process.env.API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({ code })
      });

      const result = await response.json();
      const expDate = addDays(new Date(), 30).toUTCString();

      res.setHeader(
        "Set-Cookie",
        `session=${result.jwt}; Path=/; Expires=${expDate};`
      );

      doRedirect(res, redirectUrl);
    }
  }

  render() {
    return <div>Login</div>;
  }
}
