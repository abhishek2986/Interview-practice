import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "../../message/entity/message.entity";
import { Name } from "../../names/entities/name.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  passwordHash: string;

  @Column({ default: "user" })
  role: string;

  @OneToMany(() => Name, (name) => name.user)
  names: Name[];

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[];
}