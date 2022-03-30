const call = () => console.log("Hello World")

function dizHello(callback) {
    callback()
}

dizHello(call)