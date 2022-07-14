import mongoose from 'mongoose'

const NotificationSchema = mongoose.Schema({
  name:{
    type: String,
    trim: true,
    required: [true, 'A name is required.']
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'An email is required.']
  },
  subject: {
    type: String,
    trim: true,
    required: [true, 'A subject is required.']
  },
  message: {
    type: String,
    trim: true,
    required: [true, 'A subject is required.']
  }
}, {
  timestamps: true
})

export const Notification = mongoose.model('Notification', NotificationSchema)