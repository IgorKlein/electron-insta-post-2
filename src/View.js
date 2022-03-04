const View = {
    render({ minutes, seconds }){
        document.body.innerHTML = `
            <p>Proximo Post em:</p>
            <span>${minutes}:${seconds}</span>
        `
    }
}

// nova forma de exportar uma classe ou objeto.
export default View;