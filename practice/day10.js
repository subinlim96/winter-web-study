const wrap = document.querySelector("#wrap"); // id
const box2 = wrap.querySelector(".box2"); // class
const a = box2.querySelector("a"); // 태그

console.log("======= [1] 자식요소 탐색 =======");
console.log("wrap의 자식들:", wrap.children);     // box1, box2, box3
console.log("첫 번째 자식:", wrap.children[0]);   // box1
console.log("두 번째 자식:", wrap.children[1]);   // box2
console.log("세 번째 자식:", wrap.children[2]);   // box3

console.log("======= [2] 형제요소 탐색 =======");
console.log("box2의 이전 형제:", box2.previousElementSibling); // box1
console.log("box2의 다음 형제:", box2.nextElementSibling);     // box3

console.log("======= [3] 부모요소 탐색 =======");
console.log("a의 바로 부모:", a.parentElement);        // article.box2
console.log("a에서 #wrap 찾기:", a.closest("#wrap"));  // section#wrap

console.log("✅ 끝!");            

const el = document.getElementById("box");
console.log(el);
el.textContent = "반가워"; // 안녕에서 반가워로 바뀜.

document.body.style.backgroundColor = "lightyellow";

document.title = "내 첫 웹페이지";

[...document.images].forEach(img => {
  img.style.border = "3px solid red";
});

console.log(document.forms.length); // 2
console.log(document.forms[0].id);  // login

[...document.links].forEach(link => {
  link.target = "_blank";
});

console.log(document.scripts.length); // JS 파일의 개수

document.head.style.backgroundColor = "lightgray";

document.documentElement.style.fontSize = "20px";

console.log(document.cookie);

document.cookie = "username=subin";

console.log("설정 후:", document.cookie);
// 로컬 파일로 열어서 쿠키를 저장하지 못해 빈 상자처럼 나온다.

console.log(document.URL);

const $css = document.querySelector('.css');
      
      console.log($css.previousSibling);
      console.log($css.nextSibling);
      console.log($css.previousElementSibling);
      console.log($css.nextElementSibling);

const $languages = document.getElementById('languages');
      
      console.log($languages);
      console.log($languages.childNodes);
      console.log($languages.children);
      console.log($languages.firstChild);
      console.log($languages.lastChild);
      console.log($languages.firstElementChild);
      console.log($languages.lastElementChild);
      console.log($languages.hasChildNodes());
      console.log($languages.children.length);
      console.log($languages.childElementCount);


const input = document.querySelector('input[type=text]');
     console.log(input);

     if (!input.hasAttribute('value')) {  // value 어트리뷰트가 존재하지 않으면
       // value 어트리뷰트를 추가하고 값으로 'hello!'를 설정
       input.setAttribute('value', 'hello!');
     }

     // value 어트리뷰트 값을 취득
     console.log(input.getAttribute('value')); // hello!

     // value 어트리뷰트를 제거
     input.removeAttribute('value');