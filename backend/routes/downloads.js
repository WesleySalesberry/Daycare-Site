import express from 'express'
const router = express.Router()

import { application, dentalScreeningForm, lawBrochure, transportationPermission } from '../controllers/downloads.js'

router.route('/application')
  .get(application)

router.route('/dental_screening')
  .get(dentalScreeningForm)

router.route('/transportation_permission')
  .get(transportationPermission)

router.route('/law_brochure')
  .get(lawBrochure)


export default router