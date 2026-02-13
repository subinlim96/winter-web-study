
const wrap = document.querySelector('#wrap');
console.log(wrap); //<section id="wrap">...</section

const box2 = wrap.querySelector(".box2");
console.log(box2); //<article class="box2"><a href="#">text02</a></article>

const children = wrap.children;
console.log(children); //[article.box1, article.box2, article.box3]

// const children = wrap.children;
// console.log(children[0]); //<article class="box1">text01</article>

// const children = wrap.children;
// console.log(children[1]); //<article class="box2"><a href="#">text02</a></article>

// const children = wrap.children;
// console.log(children[2]); //<article class="box3">text01</article>