import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from "typeorm";
import { User } from "../User/entity/user.entity";

@Entity()
export class Name {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  course: string;

  @ManyToOne(() => User, (user) => user.names)
  @JoinColumn({ name: "userId" })
  user: User;

  @RelationId((name: Name) => name.user)
  userId: number;
}