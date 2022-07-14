import asyncHandler from 'express-async-handler'

import { Notification } from "../models/Notification.js"


/**
 * @desc    Returns All Notification
 * @route   GET /api/v1/Notification
 * @access  Public
 */
export const getNotifications = async (req, res, next) => {
  const notifications = await Notification.find({})
  res.status(200).json({
    success: true,
    data: notifications
  })
}

/**
 * @desc    Returns Single Notification
 * @route   GET /api/v1/notification/:id
 * @access  Public
 */
export const getNotification = async (req, res, next)  => {
  const notification = await Notification.find({ _id: req.params.id })
  res.status(200).json({
    success: true,
    data: notification
  })
}

/**
 * @desc    Creates Notification
 * @route   GET /api/v1/notification
 * @access  Private
 */
export const createNotification = (req, res, next)  => {
  res.status(201).json({
    success: true,
    data: "Create Notification"
  })
}

/**
 * @desc    Updates Notification
 * @route   GET /api/v1/notification/:id
 * @access  Private
 */
export const updateNotification = (req, res, next)  => {
  res.status(201).json({
    success: true,
    data: "Update Notification"
  })
}

/**
 * @desc    Deletes Notification
 * @route   GET /api/v1/notification/:id
 * @access  Private
 */
export const deleteNotification = (req, res, next)  => {
  res.status(201).json({
    success: true,
    data: "Delete Notification"
  })
}

