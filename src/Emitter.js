const Emitter = {
    events: {},

    on(event, callback) {
        
        Emitter.events[event] = Emitter.events[event] || []
        Emitter.events[event].push(callback)
    },

    // In this case, "..." = rest operator
    emit(event, ...rest) {
        if ( event in Emitter.events === false ) {
            return;
        }

        Emitter.events[event].forEach((e) => {
            // In this case, "..." = spread operator
            e(...rest)
        })
    }

}

// the "on" functions establishes the subscribers
// Emitter.on('click', (a, b, c, d, e) => {console.log('cliquei', a, b, e)})
// Emitter.on('click', () => {console.log('cliquei 2')})
// Emitter.on('click', () => {console.log('cliquei 3')})

// the "emit" function implements a publisher
// in this case, 'click' is the channel or the topic to be subscribed
// the content on the right side of the channel is the message
// Emitter.emit('click', 1, 2, 3, 4, 5)

export { Emitter }