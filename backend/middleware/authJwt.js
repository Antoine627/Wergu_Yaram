const jwt = require('jsonwebtoken');

const authJwt = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(403).json({ message: 'Aucun token fourni' });

    jwt.verify(token, 'votre_secret_jwt', (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Token invalide' });
        req.userId = decoded.id;
        next();
    });
};

module.exports = authJwt;
