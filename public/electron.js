const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const url = require('url')
const isDev = require("electron-is-dev");
require('dotenv').config();

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 800,
    transparent: true,
    frame: !isDev,
    resizable: true,
    webPreferences: {
      devTools: isDev,
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      })
  );
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }



  ipcMain.on('app', (e, args) => {
    if (args === 'close') {
      mainWindow.close();
    }
    if (args === 'minimize') {
      mainWindow.minimize();
    }
  })
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});