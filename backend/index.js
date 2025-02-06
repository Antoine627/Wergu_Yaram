const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Import des routes
const authRoutes = require('./routes/auth');
const medecinsRoutes = require('./routes/medecins');
const medicalRecordsRoutes = require('./routes/medicalRecords');
const patientsRoutes = require('./routes/patients');
const rendezvousRoutes = require('./routes/rendezvous');

// Configuration des routes
app.use('/api/auth', authRoutes);
app.use('/api/medecins', medecinsRoutes);
app.use('/api/medical-records', medicalRecordsRoutes);
app.use('/api/patients', patientsRoutes);
app.use('/api/rendezvous', rendezvousRoutes);

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});