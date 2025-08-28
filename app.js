pacman = document.querySelector(".pacman")
console.log(pacman)


let windowWidth = window.innerWidth
let windowHeight = window.innerHeight









let x = 350; // horizontal position
let y = 300; // vertical position


pacman.style.left = x + "px";
pacman.style.top = y + "px";


document.addEventListener("keydown", function(event) {
    console.log(event.key); // This will log the key you press

    let step = 5

    switch (event.key) {
        case "ArrowDown":
            y += step
            break
        case "ArrowUp":
            y -= step
            break
        case "ArrowRight":
            x += step
            break
        case "ArrowLeft":
            x -= step
            break
        default:
            console.log("other buttons do nothing in the meantime")
    }

    pacman.style.left = x + "px";
    pacman.style.top = y + "px";



});



