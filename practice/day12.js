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

document.body.textContent = personString + numsString + '\n\n';
// document.write(personStrinig); 대신 사용하는 현대 방법

for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i);
    const value = window.localStorage.getItem(key);
    document.body.textContent += value + '<pre>';
}// 줄 바꿈 해야함.