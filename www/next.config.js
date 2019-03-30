const prod = process.env.NODE_ENV === "production";

module.exports = {
  target: "serverless",
  env: {
    API_URL: prod ? "https://api.fitfam.me" : "http://localhost:4000",
    LOGIN_URL: prod ? "https://fitfam.me/login" : "http://localhost:3000/login"
  }
};
