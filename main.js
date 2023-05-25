const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const { readLocalFile, saveLocalFile } = require('./modules/file-access');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 580,
    height: 450,
    webPreferences: {
      preload: path.join(__dirname, 'modules', 'preload.js'),
    },
  })
  win.loadFile('index.html');
}

ipcMain.handle('readFile', readLocalFile);
ipcMain.handle('saveFile', saveLocalFile);

ipcMain.handle('randomString', createRandomString);

function createRandomString() {
  return (Math.random() + 1).toString(36).substring(2);
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


