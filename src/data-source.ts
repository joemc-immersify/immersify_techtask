import "reflect-metadata";
import { DataSource } from "typeorm";
import { Customer } from "./entities/Customer";
import { Product } from "./entities/Product";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./db/shop.db",
    synchronize: true,
    logging: false,
    entities: [Customer, Product],
    migrations: [],
    subscribers: [],
});
