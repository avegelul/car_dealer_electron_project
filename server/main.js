const { app, BrowserWindow, ipcMain } = require("electron/main")
const path = require("node:path")
const { autoUpdater } = require('electron-updater')

const updater = require('update-electron-app')

updater.updateElectronApp()

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1400,
        height: 1000,

        webPreferences: {
            preload: path.join(__dirname, '../electron/preload.js')
        }
    })

    win.loadFile("web/index.html")
    win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {

    autoUpdater.checkForUpdatesAndNotify();

    ipcMain.handle('ping', () => 'pong')
    createWindow()

    ipcMain.handle('get-app-version', () => {
        return app.getVersion()
    })

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
})



