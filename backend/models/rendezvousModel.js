const db = require('../config/database'); // Assurez-vous que ce fichier existe et exporte une connexion valide à la base de données

const RendezVous = {
    getAll: (callback) => {
        const query = 'SELECT * FROM rendezvous';
        db.query(query, callback);
    },
    create: (data, callback) => {
        const query = 'INSERT INTO rendezvous SET ?';
        db.query(query, data, callback);
    },
    update: (id, data, callback) => {
        const query = 'UPDATE rendezvous SET ? WHERE id = ?';
        db.query(query, [data, id], callback);
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM rendezvous WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = RendezVous;