let fs = require('fs');
const path = require('path');

const filePath = path.resolve('src', 'files', 'fichero.txt');

function readLocalFile() {
  return new Promise( (resolve, reject) => {
    fs.readFile(filePath, 'utf-8', function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function saveLocalFile(event, text) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, text, (err) => {
      if(err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
}

module.exports = {
  readLocalFile,
  saveLocalFile,
}