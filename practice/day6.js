const readline = require('readline'); // 모듈을 불러옴
// import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin, // 표준 입력 스트림
    output: process.stdout // 표준 출력 스트림
}); // 콘솔에 입력을 받기 위한 모듈 불러오기

console.log('== 학생 성적 관리 ==');
console.log('1. 학생 추가');
console.log('2. 학생 삭제');
console.log('3. 평균 점수 보기');
console.log('4. 최고점 학생 보기');
console.log('5. JSON으로 저장');
console.log('0. 종료');

var number;

const students = [];

function showMenu() { // 비동기 코드와 while을 쓰고 싶다면
    // 함수를 선언해 재귀적으로 사용하면 됨.
    rl.question("선택 > ", (number) => { // 무조건 문자열로 받음
    // 숫자로 받을거면
    numbering = parseInt(number, 10);
    switch (numbering) {
        case 0:
            rl.close();
            return;
        case 1:
        // 추가할 학생의 정보를 입력해주세요.
        // 이름 > ~~~~ 
        // 점수 > ~~~~
            console.log('추가할 학생의 정보를 입력해주세요.');
            rl.question('이름 > ', (name) => {
                rl.question('점수 > ', (grade) => {
                    students.push([name, grade]);
                    console.log(students); // 일단 키 없이, 2차원 배열로 만들어보기
                    showMenu();
                });
            });
            break;
        case 2: // 학생 삭제
        // 삭제할 학생의 정보를 입력해주세요.
        // 이름 > ~~~~ 
        // 점수 > ~~~~(동명이인을 고려할 시)
            console.log('삭제할 학생의 정보를 입력해주세요.');
            rl.question('이름 > ', (name) => {
                rl.question('점수 > ', (grade) => {
                    students.pop();
                    
                    console.log(students);
                    showMenu();
                });
            });
            break;
        case 3: // 평균 점수 보기
        // 현재 평균 점수입니다. > ~~~~
        var sum1 = 0;
        for (var i = 0; i < students.length; i++) {
            sum1 += parseInt(students[i][1], 10);
        }
        console.log('현재 평균 점수는', sum1 / students.length, '점입니다.');
        showMenu();
        case 4: // 최고점 학생 보기
        // 현재 가장 높은 점수를 가진 학생입니다. > ~~~~
        case 5: // JSON으로 저장
        }
    });
};
// 가능하면 수정하는 것도 만들기

showMenu();

// rl.question('선택 > ', (answer) => {
//     // 입력받은 값을 숫자로 변환
//     number = parseInt(answer, 10);
//         switch (number) {
//         case 0: // 종료
//             break;
//         case 1: // 학생 추가
//         // 추가할 학생의 정보를 입력해주세요.
//         // 이름 > ~~~~
//         // 점수 > ~~~~
//             console.log('추가할 학생의 정보를 입력해주세요.');
//             rl.question('이름 > ', (name) => {
//                 rl.question('점수 > ', (grade) => {
//                     students.push([name, grade]);
//                     rl.close();
//                     // 다시 switch 제일 위 문장으로 가는 코드
//                 });
//             });
//         case 2: // 학생 삭제
//         // 삭제할 학생의 정보를 입력해주세요.
//         // 이름 > ~~~~ 
//         // 점수 > ~~~~(동명이인을 고려할 시)
//             console.log('삭제할 학생의 정보를 입력해주세요.');
//             rl.question('이름 > ', (name) => {
//                 rl.question('점수 > ', (grade) => {
//                     students.pop([name, grade]);
//                     rl.close();
//                 });
//                 rl.close();
//             });
//         case 3: // 평균 점수 보기
//         // 현재 평균 점수입니다. > ~~~~
//         case 4: // 최고점 학생 보기
//         // 현재 가장 높은 점수를 가진 학생입니다. > ~~~~
//         case 5: // JSON으로 저장
//         }
//         // 입력 인터페이스 닫기
//         rl.close();
//     }
// ); // node day6.js를 터미널에 입력해야만 콘솔에서 실행이 가능함.
