const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://deepam-social-media2.herokuapp.com";

module.exports = baseUrl;
