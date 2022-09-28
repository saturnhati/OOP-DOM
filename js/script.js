let images = ["./assets/img/pic1.jpg", "./assets/img/pic2.jpg", "./assets/img/pic3.jpg", "./assets/img/pic4.jpg", "./assets/img/pic5.jpg", "./assets/img/pic6.jpg", "./assets/img/pic7.jpg", "./assets/img/pic8.jpg"]
let slide = []
let interval;

images.forEach(element => {
    let pic = new Image(300, 300)
    pic.src = element
    pic.classList.add("image")
    document.querySelector('#slider').appendChild(pic)
    slide.push(pic)
});

function startSlider() {
    let i = 0

    interval = setInterval(() => {
        for (let index = 0; index < slide.length; index++) {
            if (i == index) {
                slide[i].style.visibility = 'visible'
                if (i != slide.length - 1) {
                    slide[i + 1].style.visibility = 'visible'
                }
            }
            else {
                slide[index].style.visibility = 'hidden'
                if (i != slide.length - 1) {
                    slide[i + 1].style.visibility = 'visible'
                }
            }
        }
        if (i != 0) {
            slide[i - 1].style.visibility = 'hidden'
        }
        if (i === slide.length - 1) {
            slide.forEach(element => {
                element.classList.remove("animation")
            });
            i = 0
        }
        slide[i].classList.add("animation")
        i++
    }, 2200);
}

function stopSlider() {
    clearInterval(interval);
    console.log("I prevented your browser from exploding")
}