const { BrowserWindow } = require('electron')

const createWindow = () => {
  const { screen } = require('electron')

    // creating an objetct and extracting the whole screen size
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize

    // positioning the screen at the bottom right
    const x = Math.round(width - ( 250 ))
    const y = Math.round(height - ( 250 ))

    const win = new BrowserWindow({
      width: 250,
      height: 250,
      show: false,
      frame: false,
      resizable: false,
      fullscreenable: false,
      x: x,
      y: y
    })
  
    // win.loadURL('www.google.com')
    win.loadFile('index.html'),

    // window blur
    win.on('blur', () => {win.hide()})
    
  return win

}

module.exports = createWindow()