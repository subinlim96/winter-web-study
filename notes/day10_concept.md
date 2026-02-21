[DOM 기초]
- DOM(Document Object Model, 문서 객체 모델)
  : 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 문서 구조, 스타일, 내용 등을 변경하게 돕고
    자바스크립트 같은 스크립팅 언어가 쉽게 웹 페이지에 접근하여 조작할 수 있게끔 연결시켜 주는 역할을 담당함.

- 브라우저 DOM의 종류
1. Document Node(문서 노드): 트리의 최상위에 존재. 요소, 어트리뷰트, 텍스트 노드에 접근하기 용이
2. Element Node(요소노드): getElementById()는 괄호 안의 태그를 찾는 함수.
  (<div id="box">안녕</div> div(태그): 요소 노드, id: 속성, 안녕: 텍스트 노드)
3. Attribute Node(어트리뷰트 노드): 속성 표현
4. TExt Node(텍스트 노드): 텍스트 표현
<img width="883" height="430" alt="image" src="https://github.com/user-attachments/assets/770a37e3-62c1-402d-8d92-bc75901e7ecd" />


- 브라우저 DOM 문법
1. document.**getElementById**("id명"): 해당 id명을 가진 요소 하나를 반환
2. document.**querySelector**("선택자"): 해당 선택자를 만족하는 요소 하나를 반환
3. document.**getElementByCalssName**("class명"): 해당 class명을 가진 모든 요소들을 배열에 담아 인덱스에 맞는 요소를 반환(실시간 유사배열이라 중간에 원소를 빼거나 하면 길이가 줄어듬. 그래서 일반적인 반복문이 적용되지 못 할 수 있다.)
4. document.**getElementsByTagName**("태그명"): 해당 태그명을 가진 모든 요소들을 배열에 담아 인덱스에 맞는 요소를 반환
5. document.**querySelectorAll**("선택자명"): 해당 선택자를 만족하는 모든 요소들을 배열에 인덱스에 맞는 요소를 반환

- HTML 선택쿼리문
1. document.anchors: name 속성을 가지는 <a>요소를 모두 반환함.
2. document.applets: applet 요소를 모두 반환함. (HTML5에서 제외됨)
3. document.body: <body>요소를 반환함.
4. document.cookie: HTML 문서의 쿠키(cookie)를 반환함.
5. document.domain: HTML 문서가 위치한 서버의 도메인 네임(domain name)을 반환함.
6. document.forms: <form>요소를 모두 반환함.
7. document.images: <img>요소를 모두 반환함.
8. document.links: href 속성을 가지는 <area>요소와 <a>요소를 모두 반환함.
9. document.referrer: 링크(linking)되어 있는 문서의 URI를 반환함.
10. document.title: <title>요소를 반환함.
11. document.URL: HTML 문서의 완전한 URL 주소를 반환함.
12. document.baseURI: HTML 문서의 절대 URI(absolute base URI)를 반환함.
13. document.doctype: HTML 문서의 문서 타입(doctype)을 반환함.
14. document.documentElement: <html>요소를 반환함.
15. document.documentMode: 웹 브라우저가 사용하고 있는 모드를 반환함.
16. document.documentURI: HTML 문서의 URI를 반환함.
17. document.embeds: <embed>요소를 모두 반환함.
18. document.head: <head>요소를 반환함.
19. document.implementation: HTML DOM 구현(implementation)을 반환함.
20. document.inputEncoding: HTML 문서의 문자 인코딩(character set) 형식을 반환함.
21. document.lastModified: HTML 문서의 마지막 갱신 날짜 및 시간을 반환함
22. document.readyState: HTML 문서의 로딩 상태(loading status)를 반환함.
23. document.scripts: <script>요소를 모두 반환함.
24. document.strictErrorChecking: 오류의 강제 검사 여부를 반환함.

- DOM의 탐색 방법
  1. 자식요소 탐색
    - 부모요소.querySelector() // 부모요소 안에서 괄호 안에 있는 선택자를 넣어라(id -> #으로 시작, class -> .으로 시작, 태그 -> 그냥 시작)
    - 부모요소.children(유사배열로 출력) *유사배열 : 배열처럼 보이지만 배열은 아닌 그룹요소
      -> 자식요소를 넣어라
  2. 형제요소 탐색
    - 이전 형제요소 탐색: previousElementSibling
    - 다음 형제요소 탐색; nextElementSibling
      ex) const prevEl = box2.previousElementSibling; // box2의 바로 이전에 있는 형제요소를 넣어라
          const nextEl = box2.nextElementSibling; // box2의 바로 다음에 있는 형제요소를 넣어라
  4. 부모요소 탐색
    - 현재요소.parentElemnet: 현재 요소의 바로 부모를 찾음(parentNode도 비슷하게 실행되고 텍스트 노드 포함함.)
    - 현재요소.closet(): 현재 요소에서 시작해서 위로 올라가면서 괄호 안에 있는 것을 찾음.
  
*`<section>` vs `<article>`
- section: 주제별로 구분한 그룹, 영역을 감싸거나 구분할 때 사용
- article: 독립적 존재, 재사용 가능, 영역을 나누지만 언제든 그 영역이 다른 페이지나 영역에 가져다 쓸 수 있음

  <img width="444" height="279" alt="image" src="https://github.com/user-attachments/assets/df6cc311-6805-451e-94f7-7f44e0d8e9ae" />

  (무조건 section이 aticle을 감싸는 건 아님, 반대도 가능)

*href="#" : 페이지 맨 위로 이동이라는 의미.
*target 값 종류
- _self: 현재 탭(기본)
- _blank: 새 탭
- _parent
- _top
