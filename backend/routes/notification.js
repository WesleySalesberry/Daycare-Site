import express from 'express'
const router = express.Router()


import { createNotification, deleteNotification, getNotification, getNotifications, updateNotification } from '../controllers/notification.js'

router.route('/')
  .get(getNotifications)
  .post(createNotification)

router.route('/:id')
  .get(getNotification)
  .put(updateNotification)
  .delete(deleteNotification)

export default router