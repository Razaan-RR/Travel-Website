function page4Animation(){
    var elem = document.querySelector(".element-container")
    var hover = document.querySelector(".hover-image")
    elem.addEventListener("mouseenter", function(){
    hover.style.display = "block"
})
    elem.addEventListener("mouseleave", function(){
    hover.style.display = "none"
})

    var elements = document.querySelectorAll(".element")
    elements.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        hover.style.backgroundImage = `url(${image})`
    })
})
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
}

function loaderAnimation(){
    var load = document.querySelector(".loader")
    setTimeout(function(){
    load.style.top = "-100%"
},3500)
}

swiperAnimation()
page4Animation()
loaderAnimation()
