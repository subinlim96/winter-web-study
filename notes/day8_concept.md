# HTML 구조

- 기본 구조 (`<html>`, `<head>`, `<meta>`, `<title>`, `<body>`)

```html
<!DOCTYPE html>
// DOCTYPE = 문서 형식 선언의 줄임말
// (전체 의미) "이 문서는 HTML5로 작성되었습니다"

<html lang="ko">
<!-- html 파일의 시작과 끝을 의미
     lang="ko" → 문서의 주요 언어를 한국어로 설정
     (en: 영어, ja: 일본어) -->

<head>
  <!-- 브라우저에 문서의 정보를 전달 -->
  <meta charset="utf-8">
  <!-- utf-8(대문자도 가능)은 인코딩 방식
       → 한글 포함 모든 언어에 적용 가능 -->

  <title>여기에는 문서의 제목을 입력해주세요</title>
  <!-- 웹 브라우저의 탭 메뉴에 표시 -->
</head>

<body>
  <!-- 웹 브라우저 화면에 표시될 콘텐츠 -->
  여기에 웹페이지에 표시할 콘텐츠(태그)를 입력해주세요
</body>

</html>

<핵심 태그>
- <h1><h6>: 제목 표시(숫자가 작을수록 큰 사이즈의 글을 표시)
- <p>: 단락 구분(그룹화함/블록 요소라 다음은 새줄에서 시작함)
- <a>: 하이퍼링크 연결 ex) <a href="url">링크 텍스트</a>
- <img>: 이미지 삽입 ex) <img src="사진.jpg" alt="설명">
- <div>: 영역 분할(like 그룹화할 때 쓰는 상자) -> **너무 남발해서 사용하지 않기**
- <ul>: 순서가 없는 목록(<li>를 무조건 사용해야 함)
- <span>: 특별한 의미 없는 구분. -> 어떤 스타일을 지정하고 싶은 영역을 따로 나누는 것
  ex) <span> 동해물 </span>과 백두산이 마르고 닳도록
- <br>: 줄바꿈.
- <input>: 사용자가 데이터를 입력하는 요소. ex) <input type="text" />
  1. type: 입력받을 데이터의 타입
    - text: 텍스트 형식
    - 
  2. value: 입력하기 전, 미리 입력된 값 ex) <input type="text" value = "HELLO!" />
  3. placeholder: 사용자가 입력할 값의 힌트 ex) <input type="text" placeholder = "이름을 입력하세요." />
  4. disabled: 비활성화. (입력창은 보이지만, 입력을 할 수는 없음)
-<label>: 입력칸 앞에 붙이는 이름표(한 개에만 적용되는 것을 알아야 함)
  ex)
  <label for="id">아이디</label>
  <input type="text" id="id"> -> 아이디 [                ](브라우저에 이런식으로 표시됨)
  1. checkbox: 체크 상자를 만듬
  2. radio: 동그란 체크 상자 만

<전역속성>
- title="" : 요소의 정보나 설명 지정
- style="" : 요소의 스타일 지정
- class="" : 요소를 지칭하는 이름(중복 가능) -> 이름이 같은 것들에게만 효과를 적용할 수 있음
- id="" : 요소를 지칭하는 고유한 이름(중복 불가능)
- data-원하는 이름="" : 요소의 데이터를 지정 -> 따옴표 안에 있는 내용이 상자 안의 내용물(컴퓨터가 보는 내용)
  <img width="486" height="348" alt="image" src="https://github.com/user-attachments/assets/f1c9f416-49cb-4e75-a0b3-43f9d65e4103" />
