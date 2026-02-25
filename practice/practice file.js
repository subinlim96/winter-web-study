let c1 = document.querySelector('.c1');
let c2 = document.querySelector('.c2');
let c3 = document.querySelector('.c3');

c1.addEventListener('click', function() {
  c1.classList.toggle('flipped');
});

c2.addEventListener('click', function() {
  c2.classList.add('flipped');
});

c3.addEventListener('click', function() {
  c3.classList.remove('flipped');
});