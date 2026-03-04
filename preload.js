const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    appVersion: () => ipcRenderer.invoke('get-app-version'),

    ping: () => ipcRenderer.invoke('ping'),
})