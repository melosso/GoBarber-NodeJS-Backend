// Imports
// Node_modules imports
import Sequelize from 'sequelize';

// Import configs
import databaseConfig from '../config/database';

// Import models
import User from '../app/models/User';
import File from '../app/models/File';

// Models array
const models = [User, File];

// Models loader class
class Database {
  constructor() {
    this.init();
  }

  init() {
    // Creating connection with database
    this.connection = new Sequelize(databaseConfig);

    // First mapping: Mapping the models to apply connection to them
    // Second mapping: Mapping the models to reference user to your avatar´s id
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

// Export new database to app
export default new Database();
