// Connection with PostgreSQL Database
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: process.env.DOCKER_KEY,
  database: 'gobarber',
  define: {
    // Sets the time when creating a user
    timestamps: true,

    // Sequelize renames tables, columns and relationships in the underscored pattern
    underscored: true,
    underscoredAll: true,
  },
};
