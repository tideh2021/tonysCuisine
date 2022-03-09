// Add active class to the current nav tags  (highlight it)
/* I tried to iterate by
 lists.forEach((el) => {
if (el.getAttribute('href') === (location.path || 'index.html')) {
        el.classList.add("active");
       }
}); 
It gave me error that forEcah((el) => {..}) is not a function. 
I then googled the error. Found out that Array.from(lists).forEach((el) {..} is the right way 
to use it because getElementsByClassName("list") get object (lists).
*/

const hamburger = document.getElementById("hamburger");
const navA = document.getElementById("nav-a");
let nav = document.querySelector('.nav-a');
let a = document.querySelectorAll('.nav-a a');



hamburger.addEventListener("click", (e) => {
   e.preventDefault();
navA.classList.toggle("show");
});

Array.from(a).forEach( el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
  nav.querySelector('.active').classList.remove('active');
  el.classList.add('active');
  });
  return ;
});



const icon = document.querySelector('.icon');

icon.addEventListener('click', function myFunction(event) {
 event.preventDefault();
  var x = document.getElementById("nav-a");
  if (x.className === "list") {
    x.className += " responsive";
  } else {
    x.className = "list";
  }
  return;
});



