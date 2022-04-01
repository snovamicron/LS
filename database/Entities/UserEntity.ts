import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Book } from "./BookEntity";

@Entity('user')
export class User{
    @PrimaryGeneratedColumn()
    user_id:number

    @Column({
        type:'varchar',
        length:225
    })
    user_name:string

    @OneToMany(()=> Book, (book)=>book.user)
    books:Book[]

}