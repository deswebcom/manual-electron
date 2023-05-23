const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
let fs = require('fs');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      preload: path.join(__dirname, 'modules', 'preload.js'),
    },
  })
  ipcMain.handle('readFile', readLocalFile);
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  } 
});


function readLocalFile() {
  let file = path.join(__dirname, 'src', 'files', 'fichero.txt');
  fs.readFile(file, 'utf-8', function (err, data) {
    if (!err) {
      console.log(data);
    } else {
      console.log(err);
    }
  });
}