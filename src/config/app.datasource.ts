import { DataSource } from "typeorm";
import { Product } from "../../src/api/components/products/product.model";
import { env } from "../../src/config/global";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: env.DB_HOST,
    port: parseInt(env.DB_PORT),
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    synchronize: true,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      }
    },
    logging: true,
    entities: [Product],
    subscribers: [],
    cache: true,
    "migrations": [
        "src/migration/**/*.ts"
     ],
})