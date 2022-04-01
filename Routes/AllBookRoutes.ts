import express from 'express'
import { AppDataSource } from '../database/databaseConnection'

// Entity 
// import { User } from '../database/Entities/UserEntity'
import { Book } from '../database/Entities/BookEntity'


const router = express.Router()


// endpoint for listing new book detail in database
// need bookname data in 
router.post('/insert_book', async (req, res) => {
    try {
        const book = new Book()
        book.book_name = req.body.bookname
        await AppDataSource.manager.save(book)
        res.status(200).send('new book inserted successfully')
    } catch (error) {
        res.status(500).send('internal server error')
        console.log('getting error while inserting new book details ' + error)
    }
})


// endpoint for borrowing a book
router.put('/borrow_book', async (req, res) => {
    try {
        await AppDataSource
        .createQueryBuilder()
        .update(Book)
        .set({ user:req.body.userId, available:false })
        .where({ book_id: req.body.bookId })
        .execute()

        res.status(200).send('book borrowed successfully')
    } catch (error) {
        res.status(500).send('internal server error')
        console.log('getting error while borrowing a book ' + error)
    }
})


export default router