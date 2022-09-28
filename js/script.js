let images = ["./assets/img/pic1.jpg", "./assets/img/pic2.jpg", "./assets/img/pic3.jpg", "./assets/img/pic4.jpg", "./assets/img/pic5.jpg", "./assets/img/pic6.jpg", "./assets/img/pic7.jpg", "./assets/img/pic8.jpg"]
let slide = []
let interval;

images.forEach(element => {
    let pic1 = new Image(300, 300)
    pic1.src = element
    pic1.classList.add("image")
    document.querySelector('#slider').appendChild(pic1)
    slide.push(pic1)
});

function startSlider() {
    let i = 0

    interval = setInterval(() => {
        slide.forEach(element => {
            element.classList.remove("animation")
        });
        slide[i].classList.add("animation")
        console.log("in")
        i++
        if (i == slide.length) {
            i = 0
        }
    }, 2500);
}

function stopSlider() {
    clearInterval(interval);
    console.log("I prevented your browser from exploding")
}