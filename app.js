const { app, BrowserWindow, Tray, Menu } = require('electron');

app.on('ready', () => {
  iconPath = __dirname + "/icon.ico"
  mainWindow = new BrowserWindow({
    icon: iconPath,
    webPreferences: {
      webSecurity: false
    }
  });
  mainWindow.getBounds
  mainWindow.loadURL('https://music.youtube.com/');
  mainWindow.on('closed', () => {
    app.quit()
    mainWindow = null
  });
  tray = new Tray(iconPath);
  tray.setToolTip("YouTube Music desktop app.")

  const contextMenu = Menu.buildFromTemplate([{
    label: 'Quit',
    role: "close",
    accelerator: "Q",
    click() {
      app.quit();
    }
  }])
  tray.setContextMenu(contextMenu)
});
