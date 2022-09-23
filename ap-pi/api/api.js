'use strict';
// import node modules
const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const Port = 5001;
const app = new express();
app.use(bodyParser.json());

app.get('/state', getState);
app.post('/on', turnOn);
app.post('/off', turnOff);

app.listen(Port, function () { console.log('server running on localhost:' + Port); });

function getState(req, res) {
  exec("uhubctl -l 1-1 -p 2", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      res.status(500).send("Error getting state.");
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      res.status(500).send("Error getting state.");
      return;
    }
    var output = stdout;
    console.log(`stdout: ${stdout}`);
    var splitOutput = output.split(" ");
    var state = splitOutput[splitOutput.length - 1];
    if (state === 'power') state = 'on';
    res.status(200).send(state);
  })
}

function turnOn(req, res) {
  exec("/usr/local/bin/turn-on-lights.py", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      res.status(500).send("Error turning on lights.");
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      res.status(500).send("Error turning on lights.");
      return;
    }
    console.log(`stdout: ${stdout}`);
    res.status(200).send();
    return;
  });
}

function turnOff(req, res) {
  exec("/usr/local/bin/turn-off-lights.py", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      res.status(500).send("Error turning on lights.");
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      res.status(500).send("Error turning on lights.");
      return;
    }
    console.log(`stdout: ${stdout}`);
    res.status(200).send();
    return;
  });
}
