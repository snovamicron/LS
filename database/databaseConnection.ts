import { DataSource } from "typeorm";

// Entities
import { User } from "./Entities/UserEntity";
import { Book } from "./Entities/BookEntity";

export const AppDataSource = new DataSource({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'hellonova',
    database:'sql_library',
    entities:[User, Book],
    synchronize:true
})


export default async function connectToDatabase():Promise<void>{
    try {
        await AppDataSource.initialize()
        console.log('connected to database successfully')
    } catch (error) {
        console.log('getting error while connecting to database '+error)
    }
}