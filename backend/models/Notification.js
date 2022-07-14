import mongoose from 'mongoose'

const NotificationSchema = mongoose.Schema({
  title:{
    type: String,
    trim: true,
    unique: true,
    required: [true, 'A title is required.']
  },
  notification: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'A notification is required.']
  }
}, {
  timestamps: true
})

export const Notification = mongoose.model('Notification', NotificationSchema)