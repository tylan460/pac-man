pacman = document.querySelector(".pacman")
console.log(pacman)


let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
console.log(windowWidth)
console.log(windowHeight)

let x = 350; // horizontal position
let y = 300; // vertical position


pacman.style.left = x + "px";
pacman.style.top = y + "px";
let pacmanWidth =  50
let pacmanHeight = 50

document.addEventListener("keydown", function(event) {
    console.log(event.key); // This will log the key you press

    let step = 15

    switch (event.key) {
        case "ArrowDown":
            if (y < windowHeight - pacmanHeight) {
                y += step
            }
            
            break
        case "ArrowUp":
            if (y > 0)
            y -= step
            break
        case "ArrowRight":
            if (x < windowWidth - pacmanWidth)
            x += step
            break
        case "ArrowLeft":
            if (x > 0) {
                x -= step
            break
            }
            
        default:
            console.log("other buttons do nothing in the meantime")
    }

    pacman.style.left = x + "px";
    pacman.style.top = y + "px";
});



