<비동기>

-동기: 순차적으로 진행되는 작업(동시 X) -> 각 함수 자체에 정해져 있음.
1. 호출한 함수 또는 작어비 완료될 때까지 다른 작업이 기다려야 함.

-비동기: 독립적으로 실행되는 작업(동시 O) -> 각 함수 자체에 정해져 있음.
1. 작업의 완료 여부를 기다리지 않고 다른 적업을 실행할 수 있는 방식 의미함.

-promise
0. 비동기 처리를 위해 콜백함수 사용 -> but, 콜백을 너무 남용하게 되면 콜백 지옥에 빠짐. **이를 위해 사용함**
1. 비동기 작업이 맞이할 미래의 완료/실패와 그 결과 값을 나타냄.
2. 장점
   - 비동기 처리 시점을 명확하게 표현.
   - 연속된 비동기 처리 작업을 수정, 삭제, 추가하기 편하고 유연함.
   - 비동기 작업 상태를 쉽게 확인할 수 있음.
   - 코드의 유지 보수성이 증가함.
3. 상태
   - pending(대기중)
   - fulfilled(성공, resolve)
   - rejected(실패, reject)
4. 기본 구조
   const promise = new Promise((resolve, reject) => {  });
   ex)
   const promise = new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve("성공!");
     }, 1000);
   }); // 1초 뒤에 성공이라는 결과 생김
5. 결과 사용법
   ex)
   promise
     .**then**(result => {
       console.log(result); // "성공!"
     })
     .**catch**(error => {
       console.log(error);
     });
   - **체이닝**(Promise 결과를 다음 Promise로 계속 이어서 쓰는 것)
     ex)
     new Promise(resolve => {
       resolve(1);
     })
     .then(num => {
       return num + 1; // num + 1을 반환하면
     })
     .then(num => { // 그걸 num으로 받는다
       return num + 1;
     })
     .then(num => {
       console.log(num); // 3
     });
-async / await
1. Promise를 사람이 읽기 쉽게 쓴 문법
2. await
   let result = await addOne(1); // Promise가 끝날 때까지 여기서 잠깐 기다렸다가 resolve된 값을 result에 넣어준다.
