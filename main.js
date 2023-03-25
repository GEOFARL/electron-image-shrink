const { app, BrowserWindow } = require('electron');

// Set environment
process.env.NODE_ENV = 'development';

const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: 'ImageShrink',
    width: 500,
    height: 600,
    icon: './assets/icons/Icon_256x256.png',
    resizable: isDev,
  });

  // Using loadURL
  // mainWindow.loadURL(`file://${__dirname}/app/index.html`);
  mainWindow.loadFile(`${__dirname}/app/index.html`);
}

app.on('ready', createMainWindow);

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});
