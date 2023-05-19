const information = document.getElementById('info');
information.innerText = 
  `Using Chrome (v${versions.chrome()}), 
  Node.js (v${versions.node()}), 
  and Electron (v${versions.electron()})`;


const h1 = document.querySelector('h1');
h1.innerText = `Bienvenidos a ${appName}`;