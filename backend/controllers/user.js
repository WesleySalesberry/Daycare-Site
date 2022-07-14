/**
 * @desc    Logs user in
 * @route   POST /api/v1/user
 * @access  Public
 */
export const login = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "User Logged In"
  })
}

/**
 * @desc    Registers user
 * @route   POST /api/v1/user/register
 * @access  Private
 */
export const register = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "User Registered"
  })
}

/**
 * @desc    Returns single user data
 * @route   POST /api/v1/user/:id
 * @access  Private/Admin
 */
export const getUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Return single User"
  })
}

/**
 * @desc    Returns All User Data
 * @route   POST /api/v1/user
 * @access  Admin
 */
export const getUsers = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Return Users"
  })
}

/**
 * @desc    Update User Data
 * @route   Delete /api/v1/user/:id
 * @access  Admin
 */
export const updateUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Update Users"
  })
}

/**
 * @desc    Delete User Data
 * @route   Delete /api/v1/user/:id
 * @access  Admin
 */
export const deleteUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Delete Users"
  })
}