// Environment variables imported from .env file
export const env = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	NODE_PORT: process.env.PORT || 3000,
	DB_USERNAME: process.env.DB_USERNAME || 'postgres',
	DB_PASSWORD: process.env.DB_PASSWORD || 'kencas@45',
	DB_PORT: process.env.DB_PORT || '5432',
	DB_HOST: process.env.DB_HOST || 'localhost',
	DB_NAME: process.env.DB_NAME || 'intern-pulse',
};
