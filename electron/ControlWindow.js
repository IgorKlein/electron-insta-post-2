function ControlWindow(win, tray) {

    function toogle() {
        if( win.isVisible() ){
            win.hide()
        } else {
            show()
        }
    }

    function show() {
        // getting the win and tray positions
        const { x, y } = getPosition()
        // refreshing the win positioning
        win.setPosition(x, y, false)
        // show the window
        win.show()
        // window focus
        win.focus()
    }

    function getPosition() {
        const winBounds = win.getBounds()
        const { screen } = require('electron')

        // creating an objetct and extracting the whole screen size
        const primaryDisplay = screen.getPrimaryDisplay()
        const { width, height } = primaryDisplay.workAreaSize

        // positioning the screen at the bottom right
        const x = Math.round(width - ( winBounds.width ))
        const y = Math.round(height - ( winBounds.height ))

        /* this code is proper for windows and mac.
        const trayBounds = tray.getBounds()

        const x = Math.round(winBounds.y - (winBounds.width / 2))
        const y = Math.round(trayBounds.y - (trayBounds.height / 2) - 3)
        */

        return { x, y }
    }

    function resetTime() {
        // win.emit('resetTime')
        console.log('resetTime by ControlWindow')
    }

    return { toogle, resetTime }
}

module.exports = ControlWindow
