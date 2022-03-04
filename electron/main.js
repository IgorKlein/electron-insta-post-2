const { app, Menu } = require('electron')
const ControlWindow = require('./ControlWindow.js')

function App() {
  const win = require('./createWindow')
  const tray = require('./Tray.js')

  // const { toogle } = controlWindow(win, tray)
  const controlWindow = ControlWindow(win, tray)

  tray.on('click', controlWindow.toogle )
  win.show()

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show remaining time', click: () => { win.show()}},
    { label: 'Reset time', click: () => { win.reload(), win.show() }},
    { label: 'Close application', click: () => { app.quit() } }
  ])
  tray.setContextMenu(contextMenu)
}

app.whenReady().then(App)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

module.exports = App