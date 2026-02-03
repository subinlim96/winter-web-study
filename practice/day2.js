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
const sum1 = student.reduce(function(acc, cur) {return acc + cur.score;}, 0); 
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

// 이름만 출력
// const name1 = student.forEach(function(names) {console.log(names.name);});
// -> 출력만을 원하는 문제에서는 name1를 만드는 건 의미 없음.
// forEach는 항상 return값이 undefined야!
student.forEach(function(names) {console.log(names.name);});