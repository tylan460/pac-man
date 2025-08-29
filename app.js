pacman = document.querySelector(".pacman")
console.log(pacman)

pellet = document.querySelector(".pellet")


let windowWidth = window.innerWidth
let windowHeight = window.innerHeight


let x = 350; // horizontal position
let y = 300; // vertical position


pacman.style.left = x + "px";
pacman.style.top = y + "px";
let pacmanWidth =  50
let pacmanHeight = 50

let rotation = 0
pacman.style.transform = `rotate(${rotation}deg)`



document.addEventListener("keydown", function(event) {
    let pacmanBox = pacman.getBoundingClientRect();
    let pelletBox = pellet.getBoundingClientRect()

    console.log(pacmanBox)
    console.log(pelletBox)

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

    if (pacmanBox.left < pelletBox.right &&
        pacmanBox.right > pelletBox.left &&
        pacmanBox.top < pelletBox.bottom &&
        pacmanBox.bottom > pelletBox.top
    ) {
        pellet.style.display = "none"
    }

    /*
    ✅ How you should think instead
    Instead of trying to express “approach from the right side” or “mouth side of Pac-Man,” 
    you want to think in terms of rectangle overlap in general.
    Imagine Pac-Man and the pellet as boxes. They collide if:
    Pac-Man’s left edge is to the left of pellet’s right edge
    Pac-Man’s right edge is to the right of pellet’s left edge
    Pac-Man’s top edge is above pellet’s bottom edge
    Pac-Man’s bottom edge is below pellet’s top edge

    */
});


