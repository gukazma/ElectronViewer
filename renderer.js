
const setButton = document.getElementById('btn')
const titleInput = document.getElementById('title')
setButton.addEventListener('click', () => {
  const title = titleInput.value
  window.electronAPI.setTitle(title)
})

const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const btnOpenAFile = document.getElementById('btnOpenAFile')
const filePathElement = document.getElementById('filePath')
btnOpenAFile.addEventListener('click', async () => {
  const filePath = await window.electronAPI.openAFile()
  filePathElement.innerText = filePath
})

const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong'
}

func()