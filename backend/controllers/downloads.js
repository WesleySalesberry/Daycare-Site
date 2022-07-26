import path from 'path'

const __dirname = path.resolve()
/**
 * @desc    Downloads the Student Application
 * @route   GET /api/v1/download/application
 * @access  Public
 */
export const application = (req, res, next) => {

  res.sendFile(path.resolve(__dirname, 'backend', 'files', 'APPLICATION.pdf'));
}

/**
 * @desc    Downloads the Dental Screening Form
 * @route   GET /api/v1/download/dental_screening
 * @access  Public
 */
export const dentalScreeningForm = (req, res, next) => {

  res.sendFile(path.resolve(__dirname, 'backend', 'files', 'Dental_Screening.pdf'));
}

/**
 * @desc    Downloads the transportation Permission form
 * @route   GET /api/v1/download/transportation_permission
 * @access  Public
 */
export const transportationPermission = (req, res, next) => {

  res.sendFile(path.resolve(__dirname, 'backend', 'files', 'Transportation_Permission.pdf'));
}

/**
 * @desc    Downloads the Law Brochure
 * @route   GET /api/v1/download/law_brochure
 * @access  Public
 */
export const lawBrochure = (req, res, next) => {

  res.sendFile(path.resolve(__dirname, 'backend', 'files', 'Law_Brochure.pdf'));
}