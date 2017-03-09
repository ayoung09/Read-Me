const transcriber = require('@google-cloud/speech')({
  projectId: 'stackathon-160920',
  keyFilename:'../Stackathon-c28b8d654064.json'
});

module.exports = transcriber;
