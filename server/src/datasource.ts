import { DataSourceOptions } from "typeorm";
import { Message } from "./message/entity/message.entity";
import { Name } from "./names/name.entity";
import { User } from "./User/entity/user.entity";

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Ap298605@05",
  database: "Exam",
  synchronize:true,
  entities:[Message,Name,User]
};
