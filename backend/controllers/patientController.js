const Patient = require('../models/patientModel');

const patientController = {
    getAllPatients: (req, res) => {
        Patient.getAll((err, results) => {
            if (err) return res.status(500).json(err);
            res.json(results);
        });
    },
    createPatient: (req, res) => {
        const newPatient = req.body;
        Patient.create(newPatient, (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ id: results.insertId });
        });
    },
    updatePatient: (req, res) => {
        const patientId = req.params.id; // Assurez-vous que l'ID est passé dans l'URL
        const updatedData = req.body;
        Patient.update(patientId, updatedData, (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Patient mis à jour avec succès' });
        });
    },
    deletePatient: (req, res) => {
        const patientId = req.params.id; // Assurez-vous que l'ID est passé dans l'URL
        Patient.delete(patientId, (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Patient supprimé avec succès' });
        });
    },
    deleteMultiplePatients: (req, res) => {
        const patientIds = req.body.ids; // Attendez un tableau d'IDs dans le corps de la requête
        if (!Array.isArray(patientIds)) {
            return res.status(400).json({ message: 'IDs invalides' });
        }
        Patient.deleteMultiple(patientIds, (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: `${results.affectedRows} patients supprimés avec succès` });
        });
    },
    archivePatient: (req, res) => {
        const patientId = req.params.id; // Assurez-vous que l'ID est passé dans l'URL
        // Implémentez la logique d'archivage ici, par exemple, en mettant à jour un champ 'archivé' dans la base de données.
        Patient.archive(patientId, (err, results) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Patient archivé avec succès' });
        });
    }
};

module.exports = patientController;