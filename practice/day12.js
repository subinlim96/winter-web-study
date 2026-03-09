const obj = {
    name: 'anna',
    age: 20
}
// localStorage에 저장할 객체

const arr = [1, 2, 3];

const objString = JSON.stringify(obj);
const arrString = JSON.stringify(arr);
// 객체, 배열을 JSON 문자열로(컴퓨터가 이해하는 상태로) 변환

window.localStorage.setItem('person', objString);
// obj가 person이라는 key의 value가 됨
window.localStorage.setItem('nums', arrString);
// arr이 nums이라는 key의 value가 됨

// getItem
const personString = window.localStorage.getItem('person');
const numsString = window.localStorage.getItem('nums');


const personObj = JSON.parse(personString);
const numsArr = JSON.parse(numsString);
// JSON 문자열을 객체 배열로 변환

document.body.innerHTML = personString + '<br>' + numsString;
// document.write(personStrinig); 대신 사용하는 현대 방법

document.body.innerHTML += '<br>'
for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i);
    const value = window.localStorage.getItem(key);
    document.body.innerHTML += value + "<br>";
} // name, age, person, nums의 값이 모두 출력됨.
// innerHTML는 HTML으로 해석하는 것이고 -> 줄바꿈은 이걸로 사용
// textContent는 그냥 글자 그대로 해석하는 것이다.
document.body.innerHTML += "<br/>";

window.localStorage.clear(); // setItem
window.localStorage.setItem('name', 'anna');
window.localStorage.setItem('age', 20);


for (const key in window.localStorage) {
    if(window.localStorage.hasOwnProperty(key)) {
        const value = window.localStorage.getItem(key);
        document.body.innerHTML += key + " : " + value + "<br/>";
    }
}
document.body.innerHTML += "<br/>";
// window.localStorage.hasOwnProperty(key)
// 는 객체가 직접 가지고 있는 속성인지 확인하는 함수.

const keys = Object.keys(window.localStorage);

for(const key of keys) {
    // value 찾기
    const value = window.localStorage.getItem(key);
    // 결과 출력
    document.body.innerHTML += key + " : " + value + "<br/>"
}
document.body.innerHTML += "<br/>";