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

let rotation = 0

pacman.style.transform = `rotate(${rotation}deg)`

document.addEventListener("keydown", function(event) {
    console.log(event.key); // This will log the key you press

    let step = 15

    switch (event.key) {
        case "ArrowDown":
            if (y < windowHeight - pacmanHeight) {
                switch (rotation) {
                    case 0:
                        rotation = 270
                        break
                    case 90:
                        rotation = 180
                        break
                    case 180:
                        rotation = 270
                        break
                    default:
                        console.log("in progress")
                }
                y += step
            }

            break
        case "ArrowUp":
            if (y > 0) {
                rotation = 90
                y -= step
                }
            
            
            break
        case "ArrowRight":
            if (x < windowWidth - pacmanWidth) {
                rotation = 180
                x += step
            }
            
            break
        case "ArrowLeft":
            if (x > 0) {
                rotation = 0
                x -= step
            break
            }
            
        default:
            console.log("other buttons do nothing in the meantime")
    }

    pacman.style.left = x + "px";
    pacman.style.top = y + "px";
    pacman.style.transform = `rotate(${rotation}deg)`
});




