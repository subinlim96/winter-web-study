function keyCodeCheck() {
    if (window.event.keyCode === 13) {
        const newLi = document.createElement('li'); // li 생성
        const newBtn = document.createElement('button'); // button 생성
        const newSpan = document.createElement('span'); // span 생성

        newLi.appendChild(newBtn); // li안에 button 담기
        newLi.appendChild(newSpan); // li안에 span 담기
        console.log(newLi);

        const todoInput = document.querySelector('#todoInput');

        newSpan.textContent = todoInput.value; // span 안에 value값 담기
    }
}

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