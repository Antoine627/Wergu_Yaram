const mysql = require('mysql2');
require('dotenv').config(); // Charger les variables d'environnement

// Configuration de la base de données
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost', // Utiliser la variable d'environnement ou la valeur par défaut
    user: process.env.DB_USER || 'root', // Utiliser la variable d'environnement ou la valeur par défaut
    password: process.env.DB_PASSWORD || '', // Utiliser la variable d'environnement ou la valeur par défaut
    database: process.env.DB_NAME || 'hopital_management', // Utiliser la variable d'environnement ou la valeur par défaut
    port: process.env.DB_PORT || 3306 // Utiliser la variable d'environnement ou la valeur par défaut
});

// Connexion à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

module.exports = db; // Exportez la connexion pour l'utiliser ailleurs