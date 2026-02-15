[DOM 기초]
- DOM(Document Object Model, 문서 객체 모델)
  : 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 문서 구조, 스타일, 내용 등을 변경하게 돕고
    자바스크립트 같은 스크립팅 언어가 쉽게 웹 페이지에 접근하여 조작할 수 있게끔 연결시켜 주는 역할을 담당함.

- DOM의 탐색 방법
  1. 자식요소 탐색
    - 부모요소.querySelector() // 괄호 안에 있는 선택자를 넣어라(id -> #으로 시작, class -> .으로 시작)
    - 부모요소.children(유사배열로 출력) *유사배열 : 배열처럼 보이지만 배열은 아닌 그룹요소
      -> 자식요소를 넣어라
  2. 형제요소 탐색
    - 이전 형제요소 탐색: previousElementSibling
    - 다음 형제요소 탐색; nextElementSibling
      ex) const prevEl = box2.previousElementSibling; // box2의 바로 이전에 있는 형제요소를 넣어라
          const nextEl = box2.nextElementSibling; // box2의 바로 다음에 있는 형제요소를 넣어라
  4. 부모요소 탐색
    - 현재요소.parentElemnet;
    - 현재요소.closet()
  
*`<section>` vs `<article>`
- section: 주제별로 구분한 그룹, 영역을 감싸거나 구분할 때 사용
- article: 독립적 존재, 재사용 가능, 영역을 나누지만 언제든 그 영역이 다른 페이지나 영역에 가져다 쓸 수 있음

  <img width="444" height="279" alt="image" src="https://github.com/user-attachments/assets/df6cc311-6805-451e-94f7-7f44e0d8e9ae" />

  (무조건 section이 aticle을 감싸는 건 아님, 반대도 가능)
