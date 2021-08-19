/* for slide up icon  */
$(window).scroll(function () {

    let scrollTop = $(window).scrollTop()
    if (scrollTop > 600) {
        $(".pageIcon").fadeIn()
    }
    else {
        $(".pageIcon").fadeOut()
    }
})
$(".pageIcon").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 500)
    return false;
})
/*end of coding for slide up icon  */

/* start scripting code for nav bar */
const body =document.querySelector("body")
const header = document.querySelector("header")
const menu = document.querySelector(".menu")
const menuBtn = document.querySelector(".menu-btn")
const cancelBtn = document.querySelector(".cancel-btn")

menuBtn.onclick = ()=>{
    menu.classList.add("active")
    menuBtn.classList.add("hide")
    body.classList.add("disabledScroll")
}
cancelBtn.onclick = () => {
    menu.classList.remove("active")
    menuBtn.classList.remove("hide")
    body.classList.remove("disabledScroll")
}
window.onscroll=()=>{
    this.scrollY > 20 ? header.classList.add("sticky") : header.classList.remove("sticky");
}
$(".main-service").click(function(){
    $(".sub-menu").toggleClass("show",2000)
    $("nav ul .first").toggleClass("rotate")
})
/* end scripting code for nav bar */

/* for owl-carousel in section home */
// $(".owl-carousel").on("initialized.owl.carousel", function () {
//     $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
// });
let $this = $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// $this.on("changed.owl.carousel", e => {
//     $(".owl-slide-animated").removeClass("is-transitioned");
//     let $currentOwlItem = $(".owl-item.active");
//     $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");
// });

/* end code of owl-carousel */

