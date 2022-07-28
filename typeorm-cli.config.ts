import { DataSource } from "typeorm";
import { CoffeeRefactor1659016991062 } from './src/migrations/1659016991062-CoffeeRefactor';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { SchemaSync1659017869987 } from './src/migrations/1659017869987-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [
    CoffeeRefactor1659016991062,
    SchemaSync1659017869987,
  ],
});