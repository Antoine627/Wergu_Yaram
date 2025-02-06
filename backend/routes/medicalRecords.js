const express = require('express');
const router = express.Router();
const medicalRecordController = require('../controllers/medicalRecordController');

router.post('/', medicalRecordController.createMedicalRecord);
router.get('/patient/:patientId', medicalRecordController.getMedicalRecordsByPatientId);
router.delete('/:id', medicalRecordController.deleteMedicalRecord);

module.exports = router;