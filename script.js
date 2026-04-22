let testimonials = document.querySelectorAll(".testimonials__item");
let dots = document.querySelectorAll(".testimonials__dot");
let btn_prev = document.querySelector(".testimonials__icon--prev");
let btn_next = document.querySelector(".testimonials__icon--next");

let totalTestimonials = testimonials.length;
let activeIndexCurrent = 0;

let prevHandler = () => {
    let newActiveIndex = (totalTestimonials + activeIndexCurrent - 1) % totalTestimonials;
    testimonials[activeIndexCurrent].classList.remove("testimonials__item--active");
    testimonials[newActiveIndex].classList.add("testimonials__item--active");
    dots[activeIndexCurrent].classList.remove("testimonials__dot--active");
    dots[newActiveIndex].classList.add("testimonials__dot--active");
    activeIndexCurrent = newActiveIndex;
}

let nextHandler = () => {
    let newActiveIndex = (activeIndexCurrent + 1) % totalTestimonials;
    testimonials[activeIndexCurrent].classList.remove("testimonials__item--active");
    testimonials[newActiveIndex].classList.add("testimonials__item--active");
    dots[activeIndexCurrent].classList.remove("testimonials__dot--active");
    dots[newActiveIndex].classList.add("testimonials__dot--active");
    activeIndexCurrent = newActiveIndex;
}

let dotHandler = (i) => {
       testimonials[activeIndexCurrent].classList.remove("testimonials__item--active");
       testimonials[i].classList.add("testimonials__item--active");
       dots[activeIndexCurrent].classList.remove("testimonials__dot--active");
       dots[i].classList.add("testimonials__dot--active");
       activeIndexCurrent = i;
};

btn_prev.addEventListener("click", prevHandler);
btn_next.addEventListener("click", nextHandler);

for (let i = 0; i < dots.length; i++) {
   dots[i].addEventListener("click", () => dotHandler(i));
}
