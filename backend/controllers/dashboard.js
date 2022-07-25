import { Message } from '../models/Message.js'

/**
 * @desc    Returns The Count Of Messages
 * @route   GET /api/v1/dashboard/messages
 * @access  Admin
 */
export const getMessageCount = async (req, res, next) => {
  const messages = await Message.find({})
  res.status(200).json({
    success: true,
    count: messages.length
  })
}