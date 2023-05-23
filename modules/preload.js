const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('nodeData', {
  foo: 'bla bla',
  node: () => process.versions.node,
  sum: (x, y) => x + y,
});

contextBridge.exposeInMainWorld('appName', 'Hola Mundo App');

contextBridge.exposeInMainWorld('doReadFile', () => ipcRenderer.invoke('readFile'));