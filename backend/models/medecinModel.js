const db = require('../config/database');

const Medecin = {
    getAll: (callback) => {
        db.query('SELECT * FROM Medecins', callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO Medecins SET ?', data, callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE Medecins SET ? WHERE id = ?', [data, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM Medecins WHERE id = ?', [id], callback);
    },
    deleteMultiple: (ids, callback) => {
        db.query('DELETE FROM Medecins WHERE id IN (?)', [ids], callback);
    },
    archive: (id, callback) => {
        db.query('UPDATE Medecins SET archived = 1 WHERE id = ?', [id], callback); // Assurez-vous que la colonne 'archived' existe
    }
};

module.exports = Medecin;
