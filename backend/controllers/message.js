/**
 * @desc    Creates Messages
 * @route   GET /api/v1/message
 * @access  Public
 */
export const createMessages = async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Message"
  })
}

/**
 * @desc    Returns All Messages
 * @route   GET /api/v1/message
 * @access  Admin
 */
export const getMessages = async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Message"
  })
}

/**
 * @desc    Deletes Messages
 * @route   GET /api/v1/message/:id
 * @access  Admin
 */
export const deleteMessages = async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Delete Message"
  })
}

