<API 사용>

-fetch: 브라우저와 Node.js 환경에서 HTTP 요청을 보내기 위해 사용되는 현대적인 API.
        (서버에 요청을 보내고, 응답을 받아오는 함수)
-기본 구조
ex)
fetch("url") -> 'url'에 GET 요청 보내기
-전체 흐름
1. fetch 요청
2. Promise 반환
const result = fetch(url);
console.log(result); // Promise 형태를 출력
3. 서버 응답
fetch(url)
  .then((response) => {
    console.log(response);
  }); // 아직 response는 데이터가 아님.(Promise임)
4. 응답을 JSON으로 변환
fetch(url, options)
  .then(response => response.json())  // 받아온 데이터를 JSON 형식으로 변환
  .then(data => console.log(data))    // 변환된 데이터를 콘솔에 출력
  .catch(error => console.error('Error:', error));  // 에러가 발생한 경우 에러 처리
5. 진짜 데이터 사용
-async / await 버전
ex)
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

getUsers();

*파싱(parsing): 원시 부호를 기계어로 번역하는 과정의 한 단계
*json: 데이터를 전달하기 위한 약속된 글자 형식
*GET: 데이터 조회하는 방법 유형 중 하나

-GET vs POST
1. GET
   -데이터 요청이 목적, option 필요 X, body X, headers X
2. POST
   -데이터 전송이 목적, option 필요 O, body O, headers O

-export: 다른 파일에서 가져다 쓰라고 **내보내는** 표시(다수의 함수 동시에 가)
ex)
// math.js
export function add(a, b) {
  return a + b;
}
↓
// main.js
**import { add } from "./math.js";** == import { add, ...(함수이름) } from "./math.js";
console.log(add(1, 2));

-default export: 대표로 하나만 내보내는 표시(but, 고정된 이름 없음. so, 받는 파일에서 새로 이름을 붙임)
ex)
// userService.js
export default function () {
  console.log("hello");
}
↓
import **foo** from "./userService.js";
import **bar** from "./userService.js";
0. 함수 말고도 가능!
ex)
const a = 10;
export default a; // export default const a = 10; (X)

*fetch는 async/await보다 늦게 실행된다.
