const express = require('express');
const fileUpload = require('express-fileupload');
const checkHeader = require('../middlewares/middleware');

const router = express.Router();

router.get('/user', (req, res) => {
  res.json({
    nom: 'Alex',
    edat: 49,
    url: req.url,
  });
});
router.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded');
  }

  // console.log(req.files)
  let imageFile = req.files.imageFile;
  let imageFileName = imageFile.name;

  imageFile.mv(`./upload/${imageFileName}`, (err) => {
    if (err) return res.status(500).send(err);
    res.send('### File was uploaded ###');
  });
});
router.post('/time', checkHeader, (req, res) => {
  const { username } = req.body;
  res.json({ username, time: new Date().toLocaleString() });
});

router.get('/', (req, res) => {
  res.json({ message: 'not found' });
});
router.post('/', (req, res) => {
  res.json({ message: 'not found' });
});

module.exports = router;
