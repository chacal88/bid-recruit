import { Router } from 'express';
const path = require('path');
const router = Router();

router.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname + '/index.html'));
});

export default router;
