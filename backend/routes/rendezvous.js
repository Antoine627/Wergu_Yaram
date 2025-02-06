const express = require('express');
const router = express.Router();
const rendezvousController = require('../controllers/rendezvousController');

router.get('/', rendezvousController.getAllRendezVous);
router.post('/', rendezvousController.createRendezVous);
router.put('/:id', rendezvousController.updateRendezVous);
router.delete('/:id', rendezvousController.deleteRendezVous);

module.exports = router;