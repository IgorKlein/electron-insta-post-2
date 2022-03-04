import { Notifyer } from "./Notifyer.js"
import { Timer } from './Timer.js'
import { Emitter } from './Emitter.js'

// At this time, the closure is charged with the parameters, but it remains
//waiting for a call to be executed.
// So, the result is transfered to the "notify" variable.
const notify = Notifyer.notify({
    title: "Hora do Post",
    body: "Crie algum conteúdo para ajudar a comunidade."
})

const App = {
    async start() {
        try {

            await Notifyer.init()
            
            // At this point, the notify function is finally called to execute.
            // Emitter.on('countdown-start', notify)
            Emitter.on('countdown-end', notify)
            Emitter.on('countdown-end', Timer.init)
            Emitter.on('reset-time', Timer.init)


            // Timer.init(60*0.1)  
            // Timer.init(60)
            Timer.init()

        } catch (err) {
            console.log(err.message)
        }
    }
}

export { App }