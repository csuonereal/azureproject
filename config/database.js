const path = require('path');

// NOTE: Dont change these values, change the values in the .env file
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'cop4494p.postgres.database.azure.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'azureprojectdb'),
      user: env('DATABASE_USERNAME', 'ulas@cop4494p'),
      password: env('DATABASE_PASSWORD', 'y&IM*76CZnEs8ESEW5sz%31rXPef5EG'),
      ssl: env('DATABASE_SSL', false)
    },
    debug: false,
  },
});
