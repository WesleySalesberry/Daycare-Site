import express from 'express'
const router = express.Router()

import { deleteUser, getUser, getUsers, login, register, updateUser } from '../controllers/user.js'

router.route('/')
  .post(login)

/**
 * @Route Private routes for admin
 */
router.route('/register')
  .post(register)

router.route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser)

router.route('/')
  .get(getUsers)

export default router