const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 400,
    height: 300,
  })

  win.loadFile('index.html')
});