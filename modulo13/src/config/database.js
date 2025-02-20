require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5500,
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
