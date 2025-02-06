const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authController = {
    register: (req, res) => {
        const { email, nom, prenom, mot_de_passe, role } = req.body; // Utilisez les nouveaux champs
        User.create({ email, nom, prenom, mot_de_passe, role }, (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ id: results.insertId, email, nom, prenom });
        });
    },
    login: (req, res) => {
        const { email, mot_de_passe } = req.body;
        User.findByEmail(email, (err, results) => {
            if (err) return res.status(500).json(err);
            if (results.length === 0) return res.status(404).json({ message: 'Utilisateur non trouvé' });
            
            const user = results[0];
            const passwordIsValid = bcrypt.compareSync(mot_de_passe, user.mot_de_passe);
            
            if (!passwordIsValid) {
                return res.status(401).json({ accessToken: null, message: 'Mot de passe incorrect' });
            }
            
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: 86400 // 24 heures
            });
            
            res.status(200).json({
                id: user.id,
                email: user.email,
                nom: user.nom,
                prenom: user.prenom,
                accessToken: token
            });
        });
    }
};

module.exports = authController;