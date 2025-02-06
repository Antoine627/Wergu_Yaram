const db = require('../config/database'); // Ensure this file exists and exports a valid database connection

const MedicalRecord = {
    create: (data, callback) => {
        const query = `
            INSERT INTO medicalrecords (
                patientId, date, motifConsultation, medicaux, chirurgicaux, familiaux, allergies,
                taille, poids, tension, temperature, frequenceCardiaque, observation,
                diagnostic, traitement, examensComplementaires, remarques
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.patientId, data.date, data.motifConsultation, data.medicaux, data.chirurgicaux, data.familiaux, data.allergies,
            data.taille, data.poids, data.tension, data.temperature, data.frequenceCardiaque, data.observation,
            data.diagnostic, data.traitement, data.examensComplementaires, data.remarques
        ];
        db.query(query, values, callback);
    },

    findByPatientId: (patientId, callback) => {
        const query = `SELECT * FROM medicalrecords WHERE patientId = ?`;
        db.query(query, [patientId], callback);
    },

    delete: (id, callback) => {
        const query = `DELETE FROM medicalrecords WHERE id = ?`;
        db.query(query, [id], callback);
    }
};

module.exports = MedicalRecord;