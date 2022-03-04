const Notifyer = {
    async init() { 
        const permission = await Notification.requestPermission()
        if (permission !== 'granted') {
            throw new Error('Permissão Negada.')
        }
        
        
    },
    notify({ title, body, icon }) {
        // this closure returns a function that create a new instance of a 
        //notify. This code doesn't generate an instance right now.
        return () => new Notification(title, { 
            body,
            icon 
        })
    }
}

export { Notifyer }