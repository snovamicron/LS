import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./UserEntity";

@Entity('books')
 export class Book{
     @PrimaryGeneratedColumn()
     book_id:number

     @Column({
         type:'varchar',
         length:225
     })
     book_name:string

     @Column({
         type:'boolean',
         default: true
     })
     available:boolean

     @ManyToOne(() => User, (user)=>user.books)
     @JoinColumn({
         name:'user'
     })
     user:User
 }