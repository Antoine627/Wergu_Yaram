const Medecin = require('../models/medecinModel');

const medecinController = {
    getAllMedecins: (req, res) => {
        Medecin.getAll((err, results) => {
            if (err) return res.status(500).json(err);
            res.json(results);
        });
    },
    createMedecin: (req, res) => {
        const newMedecin = req.body;
        Medecin.create(newMedecin, (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ id: results.insertId });
        });
    },
    updateMedecin: (req, res) => {
        const medecinId = req.params.id;
        const updatedData = req.body;
        Medecin.update(medecinId, updatedData, (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Médecin mis à jour avec succès' });
        });
    },
    deleteMedecin: (req, res) => {
        const medecinId = req.params.id;
        Medecin.delete(medecinId, (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Médecin supprimé avec succès' });
        });
    },
    deleteMultipleMedecins: (req, res) => {
        const medecinIds = req.body.ids;
        if (!Array.isArray(medecinIds)) {
            return res.status(400).json({ message: 'IDs invalides' });
        }
        Medecin.deleteMultiple(medecinIds, (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: `${results.affectedRows} médecins supprimés avec succès` });
        });
    },
    archiveMedecin: (req, res) => {
        const medecinId = req.params.id;
        Medecin.archive(medecinId, (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Médecin archivé avec succès' });
        });
    }
};

module.exports = medecinController;