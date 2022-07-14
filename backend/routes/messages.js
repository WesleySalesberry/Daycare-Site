import express from 'express'
const router = express.Router()

import { createMessages, deleteMessages, getMessages } from '../controllers/message.js'

router.route('/')
  .get(getMessages)
  .post(createMessages)

router.route('/:id')
  .delete(deleteMessages)

export default router