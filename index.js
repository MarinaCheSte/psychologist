// toggle mobile navigation

function toggleDropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// image gallery handler

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("circle");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Animation

const animatedElems = document.querySelectorAll(".animated");

if (animatedElems.length > 0) {
  window.addEventListener("scroll", animateOnScroll);

  function animateOnScroll() {
    for (let i = 0; i < animatedElems.length; i++) {
      const animatedElem = animatedElems[i];
      const animatedElemHeight = animatedElem.offsetHeight;
      const animatedElemOffset = offset(animatedElem).top;
      const animationStart = 10;

      let animatedElemPoint =
        window.innerHeight - animatedElemHeight / animationStart;

      if (animatedElemHeight > window.innerHeight) {
        animatedElemPoint =
          window.innerHeight - window.innerHeight / animationStart;
      }
      if (
        scrollY > animatedElemOffset - animatedElemPoint &&
        scrollY < animatedElemOffset + animatedElemHeight
      ) {
        animatedElem.classList.add("_active");
      } else {
        if (!animatedElem.classList.contains("animation-off")) {
          animatedElem.classList.remove("_active");
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollY || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    };
  }
  setTimeout(() => {
    animateOnScroll();
  }, 300);
}

/*form handler*/

document.addEventListener('DOMContentLoaded',
function(){
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const form=document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e){
    e.preventDefault();
    let error=formValidate(form);

    let formData=new FormData(form);

    if(error===0){
      form.classList.add('_sending');
      let response=await fetch('send.php', {
        method:'POST',
        body:formData
      });
      if(response.ok){
        let result=await response.json();
        alert(result.message);
        formPreview.innerHTML="";
        form.reset();
form.classList.remove('_sending');
      }else{
alert("Ошибка!");
form.classList.remove("_sending");
      }

    } else {
      alert("Заполните обязательные поля")
    }
  }

function formValidate(form){
let error=0;
let formRequired=document.querySelectorAll("._required");

for (let i=0; i<formRequired.length; i++){
  const input=formRequest[i];
  formRemoveError(input);


  if (input.classList.contains("_email")){
    if(emailCheck(input)){
      formAddError(input);
      error++;
    } else{
      if(input.value===""){
        formAddError(input);
        error++;
      }
    }
  }
}
}

function formAddError(input){
  input.parentElement.classList.add("_error");
  input.classList.add("_error");
  }

function formRemoveError(input){
  input.parentElement.classList.remove("_error");
  input.classList.remove("_error")
}

function emailCheck(input){
  return !reg.test(input.value);
}

}
)
