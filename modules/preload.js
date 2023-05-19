const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  appName: 'Hola Mundo App',
});

contextBridge.exposeInMainWorld('appName', 'Hola Mundo App');

