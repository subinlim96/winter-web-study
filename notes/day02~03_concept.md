<배열>
-생성(1번 외에는 거의 안 씀)
1. const a = [];
2. const b = Array(원소들);
3. const c = new Array(원소들);
4. const d = nwe Array(배열 크기);

-접근
1. var element == arr[0]; 첫 번째 요소 대입
2. arr[1] = 10; 배열 길이 늘어남.
3. arr[2] = element; 대입 + 배열 길이 증가

-요소의 추가
1. arr[특정인덱스] = 추가할 요소;
2. arr.push(추가할 요소);
3. arr[arr.length] = 추가할 요소; 순차적으로 추가함.(가장 빠름)

-요소의 삭제
1. delete 사용 시, 문자열의 길이는 변하지 않는다.
   ex)
   delete numberArr[2]; // ["zero", "one", empty, "three"]
2. splice 사용 시, 문자열의 길이도 줄어든다.
   ex)
   numberArr.splice(2, 1); // (3) ["zero", "one", "three"]
   
- 배열의 length 프로퍼티
1. 요소의 개수가 아니라 가장 큰 인덱스에 1을 더한 값이다. (자동 갱신)
2. 배열을 자를 수 있다.(단, 복구 불가능)
   ex)
   let arr = [1, 2, 3, 4, 5]

   arr.length = 2; alert(arr); // [1, 2]
   arr.length = 5; alert(arr[3]); // undefined

- 정렬
1. 순차적 - arr.sort();
2. 역순적 - arr.reverse();

- 배열 여부 확인
0. typeof(타입 확인하는 연산자) 사용 시, object라고 나옴.
1. Array.isArray() 메소드
   ex)
   document.write(Array.isArray(arr)); // true
2. instanceof 연산자
   ex)
   document.srite(arr instanceof Array); // true

-다차원 배열
1. 탐색 속도 느려짐
2. 대량의 데이터 처리 불리 -> 3차원 이상의 배열은 거의 사용하지 X
3. 생성
   ex) const twoDimensionalArray = [ // 2차원
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
       ];
4. 접근
   ex) const value = twoDimensionalArray[0][1];
5. 추가 (push)
   ex) animals.push(["코끼리", 4]);
6. 제거 (pop, shift, splice)
   ex) animals.pop(); // 맨 끝
       animals.shift(); // 맨 앞
       animals.splice(2,2); // [2]부터 2개 삭제

- 희소 배열
1. 요소의 위치가 연속적이지 않은 배열
2. 칸은 많은데 필요한 칸은 현저히 적을 때 사용!

- 자료구조
1. 큐: 가장 먼저 들어온 요소가 가장 먼저 나가는 자료구조(선입선출) -> shift, push 사용
2. 스택: 마지막에 들어온 요소가 가장 먼저 나가는 자료구조(후입선출) -> pop, push 사용

- 문자열 배열
1. 문자열은 배열처럼 보이지만, 배열은 아니다! (읽기 전용임. 수정 불가)
   ex) var str = "안녕하세요!";
       str[0] = ""; // 오류 발생
2. 그 대신 Array.prototype.split() 메소드를 사용해서 배열로 변환하면 배열로서 사용이 가능하다.

- 배열의 내부 구조
1. 연속적인 구조
   객체처럼 arr.test = 5, arr.age = 10 식의 코드는 작동은 가능하다.
   but, length/반복문 실행 안 됨. 배열은 **목록**인데 age는 **속성**의 목적을 가짐.
2. 중간 요소 삭제
   요소의 이동 발생(배열 요소를 연속적으로 유지하기 위함) -> 성능적 문제 발생
   so, 삭제하지 않고 유효하지 않은 값으로 대체 or 또 다른 자료구조 사용
3. 사실 객체 구조가 맞음
   일반적인 배열은 아님. 배열 동작을 흉내낸 일반 객체.(그러니까 배열처럼 보이지만, 내부 구조는 객체)
   ex) 일반적인 배열: [10][20][30]
       JavaScript 배열: {
                          0: 10,
                          1: 20,
                          2: 30,
                          length: 3
                        } // 그냥 객체!
<img width="390" height="290" alt="image" src="https://github.com/user-attachments/assets/208b5a4d-2a7f-4005-802f-b099e62ace6b" />

-forEach
1. function 이용 (모든 배열의 요소를 순회하지만, 새로운 배열을 반환하진 않는다)
   ex)
   numbers.forEach(function(number) { // number = 매개변수
      console.log(number); // 실행 코드
   });
2. =>(화살표) 이용
   ex)
   numbers.forEach(number => console.log(number)); // 좀 더 단순함.
   numbers.forEach((number, index) => {
      console.log('Index: ' + index + ' Value: ' + number);
   }); // +를 이용해서 출력 형태 수정

-map(변환)
1. 배열의 각 요소에 주어진 콜백 함수를 적용해 새로운 배열을 반환함.
   ex)
   const numbers = **[1, 2, 3, 4, 5]**
   const doubledNumbers = numbers.map(function(number) {
      return number * 2; //매핑된 새로운 배열로 반환
   });
   console.log(doubledNumbers); // 출력: **[2, 4, 6, 8, 10]**
2. (element)/(element, index)/(element, index, array) => { } **가장 많이 사용하면 방법**
3. callbackFn 
4. function (element)/(element, index)/(element, index, array) { }

*콜백 함수: 전달인자로 다른 함수에 전달되는 함수.(reduce, forEach 안에 들어가는 함수)

*동기/비동기: 순차적으로 진행되는 작업(동시 X)/독립적으로 실행되는 작업(동시 O) -> 각 함수 자체에 정해져 있음.

-filter
1. 콜백 함수를 사용하여 배열의 요소를 필터링한다.
2. 조건에 맞는 요소들로만 구성된 새로운 배열을 만든다.
3. 다른 메소드들과 콜백함수 사용 형태가 동일하다.

-reduce(누적)
1. 매개변수가 2개 이상이어야 함.
2. 배열의 값을 하나의 값으로 축약한다.
   ex)
   const sum1 = student.reduce(function(acc, cur) {return acc + cur.score;}, 0);
   // 모든 요소의 합을 구하는 코드이다.\

-구조분해할당
1. 배열이나 객체의 속성을 해체하여 개별 변수에 담을 수 있게 하는 표현
   ex)
   let arr =["Bora", "Lee"]
   let [firstName, surname] = arr; // firstName엔 arr[0], surname엔 arr[1]을 할당
2. 쉼표로 요소 무시 가능
   ex)
   let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
   // [firstName, , title] -> 배열이 아니고 **차례대로 값 넣을 위치를 적어둔 것**이다.
   alert( title ); // Consul
3.
   ex)
   let user = {}; // 필수 코드
   [user.name, user.surname] = "Bora Lee".split(' ');
4. .entries()로 반복
   ex)
   let user = new Map();
   user.set("name", "John");
   user.set("age", "30");

   for (let [key, value] of user) { // user 자체가 키-값의 쌍으로 가지고 있음.
   alert(`${key}:${value}`); // name:John, then age:30
   }
   --------------------------------/
   let user = {
      name: "John",
      age: 30
   };
   for (let [key, value] of **Object.entries(user)**) { // user는 객체이나 키-값이 쌍으로 이어지진 않은 상태
      alert(`${key}:${value}`); // name:John, age:30이 차례대로 출력
   }
5. 변수 교환 트릭
   ex)
   let guest = "Jane";
   let admin = "Pete";

   // 변수 guest엔 Pete, 변수 admin엔 Jane이 저장되도록 값을 교환함
   [guest, admin] = [admin, guest];
6. '...'로 나머지 요소 가져오기
   ex)
   let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
   alert(name1); // Julius
   alert(name2); // Caesar

   // **`rest`는 배열입니다.**
   alert(rest[0]); // Consul
   alert(rest[1]); // of the Roman Republic
   alert(rest.length); // 2
7. 기본값
   ex)
   let [name = "Guest", surname = "Anonymous"] = ["Julius"];

   alert(name);    // Julius (배열에서 받아온 값)
   alert(surname); // Anonymous (기본값)
8. 객체 분해하기
   ex)
   let options = {
      title: "Menu",
      width: 100,
      height: 200
   };

   // { 객체 프로퍼티: 목표 변수 }
   let {width: w, height: h, title} = options; // 기본값 설정이 동시에 될 수 있음.(width: w = 100 )
   // let {height, width, title} = { title: "Menu", height: 200, width: 100 } 순서가 바뀌어도 동일하게 동작함.

   // width -> w
   // height -> h
   // title -> title

   alert(title);  // Menu
   alert(w);      // 100
   alert(h);      // 200
   - 프로터피가 없을 때, =로 기본값 설정 가능
     ex) let options = { title: "Menu" }; let {width = 100, height = 200, title} = options;
   - prompt로 값을 받을 수 있음(단, 이미 options에 해당 프로터피가 있다면 prompt 생략됨)\
   - 필요한 정보만 뽑아오기 가능.
   - 분해 객체의 프로퍼티 개수 > 할당 변수의 개수
     ex) let {title, ...rest} = options;
         alert(rest.height);
   - let 사용하지 않고 선언
     ex) ({title, width, height} = {title: "Menu", width: 200, height: 100}) -> 소괄호로 전체를 묶어주면 오류 X
   - 중첩 구조 분해
     ex)
     function showMenu({
        title = "Untitled",
        width: w = 100,  // width는 w에,
        height: h = 200, // height는 h에,
        **items: [item1, item2] // items의 첫 번째 요소는 item1에, 두 번째 요소는 item2에 할당함**
     }) {
        alert( `${title} ${w} ${h}` ); // My Menu 100 200
        alert( item1 ); // Item1
        alert( item2 ); // Item2
     }
  
*이터러블: 하나씩 꺼내서 **순서대로** 볼 수 있는 값(객체는 키로 값에 접근하는 자료구조라, 순서의 개념이 없음)
*new Map(): 키-값 쌍을 제대로 관리하는 통(객체의 업그레이드 버전)
*new Set(): 중복을 절대 허용하지 않는 통(like 중복 제거 전용 배열)
