import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../User/entity/user.entity";

@Entity()
export class Name {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @ManyToOne(() => User, (user) => user.names)
  @JoinColumn({ name: "userId" })
  user: User;

  @Column()
  userId: number;
}
