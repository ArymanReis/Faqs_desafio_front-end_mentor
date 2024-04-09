const plus   = document.querySelector('.plus');
const minus  = document.querySelector('.minus');

const plus2  = document.querySelector('.plus-2');
const minus2 = document.querySelector('.minus-2');

const plus3  = document.querySelector('.plus-3');
const minus3 = document.querySelector('.minus-3');

const plus4  = document.querySelector('.plus-4');
const minus4 = document.querySelector('.minus-4');


plus.addEventListener("click", function() {
    
    const response = document.querySelector(".response");

    response.classList.toggle("hide");
    plus.style.display = 'none';
    minus.style.display = 'block';
});

minus.addEventListener("click", function() {
    
    const response = document.querySelector(".response");

    response.classList.toggle("hide");
    plus.style.display = 'block';
    minus.style.display = 'none';
});

plus2.addEventListener("click", function() {
    
    const response = document.querySelector(".response-2");

    response.classList.toggle("hide");
    plus2.style.display = 'none';
    minus2.style.display = 'block';
});

minus2.addEventListener("click", function() {
    
    const response = document.querySelector(".response-2");

    response.classList.toggle("hide");
    plus2.style.display = 'block';
    minus2.style.display = 'none';
});

plus3.addEventListener("click", function() {
    
    const response = document.querySelector(".response-3");

    response.classList.toggle("hide");
    plus3.style.display = 'none';
    minus3.style.display = 'block';
});

minus3.addEventListener("click", function() {
    
    const response = document.querySelector(".response-3");

    response.classList.toggle("hide");
    plus3.style.display = 'block';
    minus3.style.display = 'none';
});

plus4.addEventListener("click", function() {
    
    const response = document.querySelector(".response-4");

    response.classList.toggle("hide");
    plus4.style.display = 'none';
    minus4.style.display = 'block';
});

minus4.addEventListener("click", function() {
    
    const response = document.querySelector(".response-4");

    response.classList.toggle("hide");
    plus4.style.display = 'block';
    minus4.style.display = 'none';
});

