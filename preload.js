const {contextBridge, ipcRenderer}  = require('electron')
contextBridge.exposeInMainWorld('versions', {
    node: () => process.version.node,
    chrome:()=> process.versions.chrome,
    electron:()=>process.versions.electron,
    ping: ()=>ipcRenderer.invoke('ping')
})

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title)=>ipcRenderer.send('set-title', title)
})