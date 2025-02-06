const db = require('../config/database'); // Assurez-vous de configurer votre connexion DB

const Patient = {
    getAll: (callback) => {
        db.query('SELECT * FROM Patients', callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO Patients (nom, prenom, date_naissance, sexe, adresse, telephone) VALUES (?, ?, ?, ?, ?, ?)', 
            [data.nom, data.prenom, data.date_naissance, data.sexe, data.adresse, data.telephone], 
            callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE Patients SET nom = ?, prenom = ?, date_naissance = ?, sexe = ?, adresse = ?, telephone = ? WHERE id = ?', 
            [data.nom, data.prenom, data.date_naissance, data.sexe, data.adresse, data.telephone, id], 
            callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM Patients WHERE id = ?', [id], callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM Patients WHERE id = ?', [id], callback);
    },
    archive: (id, callback) => {
        db.query('UPDATE Patients SET archived = true WHERE id = ?', [id], callback); // Ex. mise à jour du champ 'archived'
    }
};

module.exports = Patient;
