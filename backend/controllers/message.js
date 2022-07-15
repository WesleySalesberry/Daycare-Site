import { Message } from '../models/Message.js'

/**
 * @desc    Creates Messages
 * @route   GET /api/v1/message
 * @access  Public
 */
export const createMessages = async (req, res, next) => {
  try {
    await Message.create(req.body)
    res.status(200).json({
      success: true,
      data: "Your message has been sent!"
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * @desc    Returns All Messages
 * @route   GET /api/v1/message
 * @access  Admin
 */
export const getMessages = async (req, res, next) => {
  const messages = await Message.find({})
  res.status(200).json({
    success: true,
    count: messages.length,
    data: messages
  })
}

/**
 * @desc    Deletes Messages
 * @route   GET /api/v1/message/:id
 * @access  Admin
 */
export const deleteMessages = async (req, res, next) => {
  try {
    const message = await Message.findById({_id: req.params.id})
    if(!message){
      res.status(401)
      throw new Error('Message not found')
    }

    await message.remove()

    res.status(200).json({
      success: true,
      data: "Message Removed"
    })
  } catch (error) {
    console.log(error)
  }
}

