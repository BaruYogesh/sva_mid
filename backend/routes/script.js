var express = require('express');
var router = express.Router();
const fs = require('fs');
const {spawn} = require('child_process');

router.post('/', (req, res, next) => {
  console.log(req.body);
  let response;
  fs.writeFileSync('temp.py', req.body.data.code);

  const python = spawn('python', ['temp.py']);
  python.stdout.on('data', (data) => {
    response = data.toString();
  })

  python.on('close', (code) => {
    res.send(response);
  })

})

module.exports = router;