import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../../User/entity/user.entity"

@Entity()
export class Name {
@PrimaryGeneratedColumn()
id:string
@Column({unique: true})
name:string
@ManyToOne(()=>User,(user)=>user.names)
@JoinColumn()
user:User
}
