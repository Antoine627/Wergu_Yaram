const RendezVous = require('../models/rendezvousModel');

const rendezvousController = {
    getAllRendezVous: (req, res) => {
        RendezVous.getAll((err, results) => {
            if (err) return res.status(500).json(err);
            res.json(results);
        });
    },
    createRendezVous: (req, res) => {
        const { patientId, medecinId, date_rendezvous, heure, description, statut } = req.body;

        if (!patientId || !medecinId) {
            return res.status(400).json({ message: "patientId et medecinId sont requis." });
        }

        const newRendezVous = { patientId, medecinId, date_rendezvous, heure, description, statut };
        RendezVous.create(newRendezVous, (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ id: results.insertId });
        });
    },
    updateRendezVous: (req, res) => {
        const rendezVousId = req.params.id;
        const updatedData = req.body;

        if (!updatedData.patientId || !updatedData.medecinId) {
            return res.status(400).json({ message: "patientId et medecinId sont requis." });
        }

        RendezVous.update(rendezVousId, updatedData, (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Rendez-vous mis à jour avec succès' });
        });
    },
    deleteRendezVous: (req, res) => {
        const rendezVousId = req.params.id;
        RendezVous.delete(rendezVousId, (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Rendez-vous supprimé avec succès' });
        });
    }
};

module.exports = rendezvousController;