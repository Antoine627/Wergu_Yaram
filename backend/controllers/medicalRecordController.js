const MedicalRecord = require('../models/MedicalRecord');

// Créer un dossier médical
exports.createMedicalRecord = (req, res) => {
    const {
        patientId,
        date,
        motifConsultation,
        medicaux,
        chirurgicaux,
        familiaux,
        allergies,
        taille,
        poids,
        tension,
        temperature,
        frequenceCardiaque,
        observation,
        diagnostic,
        traitement,
        examensComplementaires,
        remarques
    } = req.body;

    MedicalRecord.create({
        patientId,
        date,
        motifConsultation,
        medicaux,
        chirurgicaux,
        familiaux,
        allergies,
        taille,
        poids,
        tension,
        temperature,
        frequenceCardiaque,
        observation,
        diagnostic,
        traitement,
        examensComplementaires,
        remarques
    }, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la création du dossier médical', error: err });
        }
        res.status(201).json({ id: results.insertId, ...req.body });
    });
};

// Récupérer tous les dossiers médicaux d'un patient
exports.getMedicalRecordsByPatientId = (req, res) => {
    const { patientId } = req.params;
    MedicalRecord.findByPatientId(patientId, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des dossiers médicaux', error: err });
        }
        res.status(200).json(results);
    });
};

// Supprimer un dossier médical
exports.deleteMedicalRecord = (req, res) => {
    const { id } = req.params;
    MedicalRecord.delete(id, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la suppression du dossier médical', error: err });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Dossier médical non trouvé' });
        }
        res.status(200).json({ message: 'Dossier médical supprimé avec succès' });
    });
};