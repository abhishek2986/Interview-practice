import { DataSourceOptions } from "typeorm";
import { User } from "./User/entity/user.entity";
import { Message } from "./message/entity/message.entity";
import { Name } from "./names/entities/name.entity";

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Ab298605", //Ap298605@05
  database: "Exam",
  entities: [User, Name, Message],
  synchronize: true,
};
