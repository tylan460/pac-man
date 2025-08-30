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




function pelletGeneration() {
    let pelletCoordinates = []
    

    for (let i = 0; i < 20; i++) {

        pelletCoordinates.push({x: Math.floor(Math.random() * (windowWidth - 15)), 
            y: Math.floor(Math.random() * (windowHeight - 15))
        })
    }

    let pelletsArray = []
    for (let i = 0; i < pelletCoordinates.length; i++){

        let pellet = document.createElement("div")
        pellet.classList.add("pellet")
        pellet.getBoundingClientRect().width 
        pellet.style.top = `${pelletCoordinates[i].y}px`
        pellet.style.left = `${pelletCoordinates[i].x}px`
        document.body.appendChild(pellet)
        pelletsArray.push(pellet)
    }
    return pelletsArray
}



pellets = pelletGeneration(pellet)


document.addEventListener("keydown", function(event) {
    let pacmanBox = pacman.getBoundingClientRect();

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

    for (let i = 0; i < pellets.length; i ++ ) {

        let pelletBox = pellets[i].getBoundingClientRect()
        if (pacmanBox.left < pelletBox.right &&
            pacmanBox.right > pelletBox.left &&
            pacmanBox.top < pelletBox.bottom &&
            pacmanBox.bottom > pelletBox.top
        ) {
            pellets[i].style.display = "none"
        }

    }

    

});


