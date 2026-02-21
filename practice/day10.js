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
