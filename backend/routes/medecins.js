const express = require('express');
const medecinController = require('../controllers/medecinController');
const router = express.Router();

// Récupérer tous les médecins
router.get('/', medecinController.getAllMedecins);

// Ajouter un médecin
router.post('/', medecinController.createMedecin);

// Mettre à jour un médecin
router.put('/:id', medecinController.updateMedecin);

// Supprimer un médecin
router.delete('/:id', medecinController.deleteMedecin);

// Supprimer plusieurs médecins
router.post('/delete-multiple', medecinController.deleteMultipleMedecins);

// Archiver un médecin
router.post('/archive/:id', medecinController.archiveMedecin);

module.exports = router;