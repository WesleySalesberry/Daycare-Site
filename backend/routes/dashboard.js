import express from 'express'
import { getMessageCount } from '../controllers/dashboard.js'
const router = express.Router()

router.route('/message')
  .get(getMessageCount)

export default router