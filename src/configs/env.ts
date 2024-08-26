import * as Joi from 'joi';
import * as dotenv from 'dotenv';

dotenv.config();

interface Env {
  NODE_ENV: string;
  PORT?: number;
  DATABASE_URL: string;
  
}

const schema = Joi.object<Env>({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'staging', 'test')
    .default('development'),
  PORT: Joi.number().required()
    .description('Application Port Numbert is required'),
  DATABASE_URL: Joi.string()
    .required()
    .description('Database name required'),
})
  .unknown()
  .required();

const { error, value: env } = schema.validate(process.env);

if (error) {
  console.error(`Config validation error: ${error.message}`);
  process.exit(1);
}

const config: {
  env: string;
  port?: number;
  databaseUrl: string;
  
} = {
  env: env.NODE_ENV,
  port: env.PORT,
  databaseUrl: env.DATABASE_URL
};
export default config;
