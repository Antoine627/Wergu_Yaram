const db = require('../config/database');
const bcrypt = require('bcryptjs');

const User = {
    create: (data, callback) => {
        const hashedPassword = bcrypt.hashSync(data.mot_de_passe, 8); // Utilisez mot_de_passe
        const userData = { ...data, mot_de_passe: hashedPassword }; // Utilisez mot_de_passe
        db.query('INSERT INTO utilisateur (email, nom, prenom, mot_de_passe, role) VALUES (?, ?, ?, ?, ?)', 
            [userData.email, userData.nom, userData.prenom, userData.mot_de_passe, userData.role], 
            callback);
    },
    findByEmail: (email, callback) => {
        db.query('SELECT * FROM utilisateur WHERE email = ?', [email], callback);
    }
};

module.exports = User;
