const {app, BrowserWindow, ipcMain, dialog} = require('electron')
const path = require('path')
const { updateElectronApp } = require('update-electron-app')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
    updateElectronApp()
    ipcMain.handle('ping', () => 'pong')
    ipcMain.on('set-title', (event, title) => {
        const webContents = event.sender
        const win = BrowserWindow.fromWebContents(webContents)
        win.setTitle(title)
      })
    ipcMain.handle('dialog:openFile', async () => {
      const {canceled, filePaths} = await dialog.showOpenDialog({})
      if(!canceled)
      {
        return filePaths[0]
      }
    })
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
        }
    })
})


app.on('window-all-closed', ()=>{
    if (process.platform !== 'darwin'){
        app.quit()
    }
})