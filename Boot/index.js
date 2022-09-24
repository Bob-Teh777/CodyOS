const { ipcMain } = require('electron')
var fs = require('fs');

// With checking if dir already exists
if (!fs.existsSync('/Programs')) fs.mkdir('/Programs');
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })
  ipcMain.handle('ping', () => 'pong')
  win.loadFile('index.html')
}
