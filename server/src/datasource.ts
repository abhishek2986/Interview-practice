import { DataSourceOptions } from "typeorm";

export const dataSourceOptions:DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Ap298605@05",
  database: "Exam",
  synchronize:true
};
