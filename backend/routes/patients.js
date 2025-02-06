const express = require('express');
const patientController = require('../controllers/patientController');

module.exports = (db) => {
    const router = express.Router();

    // Récupérer tous les patients
    router.get('/', patientController.getAllPatients);

    // Ajouter un patient
    router.post('/', patientController.createPatient);

    // Mettre à jour un patient
    router.put('/:id', patientController.updatePatient);

    // Supprimer un patient
    router.delete('/:id', patientController.deletePatient);

    // Supprimer plusieurs patients
    router.post('/delete-multiple', patientController.deleteMultiplePatients);

    // Archiver un patient
    router.post('/archive/:id', patientController.archivePatient);

     // Archiver un patient
     router.post('/archive/:id', patientController.archivePatient);

    return router;
};