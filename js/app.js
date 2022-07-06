//! Selector

let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")

setClock()

function setClock(){
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    second.style.transform = `rotate(${180 + (seconds * 6)}deg)`
    minute.style.transform = `rotate(${180 + (minutes * 6)}deg)`
    hour.style.transform = `rotate(${180 + (hours * 30)}deg)`
}

setInterval(setClock,1000)

