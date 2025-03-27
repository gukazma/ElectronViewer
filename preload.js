const {contextBridge, ipcRenderer}  = require('electron')
contextBridge.exposeInMainWorld('versions', {
    node: () => process.version.node,
    chrome:()=> process.versions.chrome,
    electron:()=>process.versions.electron,
    ping: ()=>ipcRenderer.invoke('ping')
})