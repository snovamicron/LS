import express from 'express'
import { AppDataSource } from '../database/databaseConnection'
import { User } from '../database/Entities/UserEntity'
const router = express.Router()


// endpoint for inserting new user
router.post('/insert_user', async (req, res)=>{
    try {
        const user = new User()
        user.user_name = req.body.username
        await AppDataSource.manager.save(user)
        res.status(200).send('insert new user successfully')
    } catch (error) {
        res.status(500).send('Internal server error')
        console.log('getting error while inserting new user in db '+error)
    }
})


// endpoint for getting all userdata
router.get('/fetch_users', async (req, res)=>{
    try {
        const users = await AppDataSource.getRepository(User).find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send('internal server error')
        console.log('getting error while fetching all users from db '+error)
    }
})



export default router