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
