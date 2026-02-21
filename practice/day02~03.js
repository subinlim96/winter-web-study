const arr = []; // 빈 배열 생성

arr[0] = '갱갱'; // <meta charset="UTF-8">는 한글 깨짐을 방지함.
arr[1] = 'bin';
arr[2] = 'tow';

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const arr1 = [1, 2, 3];

console.log(Object.getOwnPropertyDescriptors(arr1));
console.log(Object.keys(arr1));
console.log(Object.entries(arr1));
console.log({...arr1});

document.write(JSON.stringify({...arr1}, null, 2));

console.log(arr1[0]);     // 1
console.log(arr1["0"]);   // 1 (같음!!)

// ----------------------------------------

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});
numbers.forEach(number => console.log(number));
numbers.forEach((number, index) => console.log('Index: ' + index + ' Value: ' + number));
numbers.forEach((number, index) => {console.log('Index: ' + index + ' Value: ' + number);});
numbers.forEach((number, index, array) => {
    console.log(array[index] + ', ' + number);
}); // array[index] == number


// ---------------------

console.log(Object.values(arr1));

const student = [
    {name:"민수", score:80},
    {name:"영희", score:95},
    {name:"수빈", score:50},
    {name:"준영", score:100}
];

// 평균 구하기
const sum1 = student.reduce(function(acc, cur) {return acc + cur.score;}, 0); // 모든 요소들의 합
// reduce: 배열을 하나의 값으로 **줄여**주는 함수.
// student.reduce(함수, 0) -> student 배열을 하나씩 꺼내면서 내가 정해 둔 규칙에 따라 계산해라!
// reduce((누적값, 현재값) => { ... }, 초기값)
// == [const sum1 = student.reduce((acc, cur) => {return acc + cur.score;}, 0); ]
// acc = 0; cur = {name:"민수", score:80} 으로 시작함.

console.log(sum1 / student.length);

// 최고점 찾기
const max1 = student.reduce(function(prev, value) {return prev >= value.score ? prev : value.score});
// Math.max(...array) -> 해당 메소드를 통해 배열의 최댓값 구할 수 있음.
// 조건 ? 참일 때 반환하는 값 : 거짓일 때 반환하는 값
// return prev.score >= value.score ? prev.score : value.score (X)
// -> prev는 반환하는 값으로 바뀌기 때문에 그대로 사용. prev.score는 (prev.score).score인 셈!
console.log(max1);

// 80점 이상 객체 찾기
//const filter = student.reduce(function(value) {return value.score >= 80 ? value.score : null});
// 변수 하나만으로는 해결할 수 없음
const filter = student.reduce(function(origin, newthing) {return newthing.score >= 80 ? [...origin, newthing] : origin}, []);
console.log(filter);
// -> filter 메소드를 이용하면 좀 더 편하게 만들 수 있음.
const filter1 = student.filter((value) => {return value.score >= 80;});
console.log(filter1);

// 이름만 출력
// const name1 = student.forEach(function(names) {console.log(names.name);});
// -> 출력만을 원하는 문제에서는 name1를 만드는 건 의미 없음.
// forEach는 항상 return값이 undefined야!
student.forEach(function(names) {console.log(names.name);});

// -----------------------------------------

const numbering = [1, 2, 3, 4, 5]
const doubledNumbers = numbering.map(function(number) {
    return number * 2; //매핑된 새로운 배열로 반환
});
console.log(doubledNumbers); // 출력: **[2, 4, 6, 8, 10]**

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 개발자가 직접 작성한 콜백 함수
function isEven(value) {
    return value % 2 == 0; // 짝수인 경우 true 반환
}

// 배열의 요소를 순회하면서 필터링된 배열로 반환
const result = num.filter((value) => {return value % 2 == 0;});
console.log(result); // 출력: [2, 4, 6, 8, 10]

// ------------------------------------------------------
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// ...title로 하면 Consul,of the Roman Republic로 나옴
alert( title );

let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

let option1 = {
  title: "Lim subin",
  items: ["ItemA", "ItemB"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width는 w에,
  height: h = 200, // height는 h에,
  items: [item1, item2] = [] // items의 첫 번째 요소는 item1에, 두 번째 요소는 item2에 할당함
} = {}) { // function showMenu({ ~~~~ } = {}) 인수가 없으면 빈 상자를 하나 만든다.
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}
showMenu(options);
showMenu(option1);
showMenu({});
showMenu();

//---------------------------------------------
//문제 풀어보기
let user = {
    name: "John",
    years: 30
};

let {name: username, years:age, isAdmin = false} = user;

alert(username);
alert(age);
alert(isAdmin);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function max_salary(salaries) {
    let max = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) { //salaries 객체를 [name, salary] 쌍으로 순회
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }
    alert(maxName); // 최대 급여를 받는 사람의 이름 출력
}
max_salary(salaries);
max_salary({});