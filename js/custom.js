const documentBody = document.getElementById('body')

// Sticky Nav Section
const header = document.getElementById('header')


function stickyNavHandler(){

    if(document.documentElement.scrollTop > 40 || document.body.scrollTop > 400){
        header.classList.add('stickyNav')
    }else{
        header.classList.remove('stickyNav')
    }
}

stickyNavHandler()
window.addEventListener('scroll',stickyNavHandler)

const offcanvas = document.getElementById('offcanvas')
const navShowBtn = document.getElementById('navShowBtn')
const navHideBtn = document.getElementById('navHideBtn')
const navbarSupportedContent = document.getElementById('navbarSupportedContent')

navShowBtn.addEventListener('click', ()=>{
    
    navbarSupportedContent.classList.add('showMobileNav')
    offcanvas.style.display = 'block'
    documentBody.style.overflow = 'hidden'
})
navHideBtn.addEventListener('click', ()=>{
    offcanvas.style.display = 'none'
    navbarSupportedContent.classList.remove('showMobileNav')
    documentBody.style.overflow = 'unset'

})

// Testimonial Slider

const testimonialSwiperThumbs = new Swiper('.testimonial-thumbs', {
    loop: true,
    slidesPerView: 1,
    spaceBetween : 30,

    breakpoints : {
        850 : {
            slidesPerView: 3,
        },

        576 : {
            slidesPerView: 2,
        }
    }
})

const testimonialSwiper = new Swiper('.testimonial-slider', {
    loop: true,
    slidesPerView: 1,

    thumbs: {
        swiper: testimonialSwiperThumbs,
    },

    autoplay : {
        delay : 5000
    }
})



// Blog Slider
const blogSwiper = new Swiper('.blog-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween : 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.blog-swiper-button-next',
      prevEl: '.blog-swiper-button-prev',
    },

    breakpoints : {
        1199 : {
            slidesPerView: 3,
        },

        768 : {
            slidesPerView: 2,
        }
    }
  
  });
  


// backtop Button

const backtop = document.getElementById('backTop')

window.addEventListener('scroll', function () {
    
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        backtop.style.visibility = "visible"
        backtop.style.bottom = "40px"
    }else{
        backtop.style.visibility = "hidden"
        backtop.style.bottom = "0"
    }
})

  
  backtop.addEventListener('click', function(){
    window.scrollTo({
        top: 0, 
        left: 0, 
        behavior: 'smooth',
        duration : 1000,    
    });

})
  

 AOS.init();