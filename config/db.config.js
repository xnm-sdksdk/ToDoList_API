const config = {
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  SECRET: process.env.DB_SECRET,
};

config.URL = `mongodb+srv://${config.USER}:${config.PASSWORD}@todolistcluster.h6rlkzm.mongodb.net/${config.DB}?retryWrites=true&w=majority`;

module.exports = config;
