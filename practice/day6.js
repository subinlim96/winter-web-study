const readline = require('readline'); // 모듈을 불러옴

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

rl.question('선택 > ', (answer) => {
    // 입력받은 값을 숫자로 변환
    var number = parseInt(answer, 10);

    // 입력 인터페이스 닫기
    rl.close();
}); // node day6.js를 터미널에 입력해야만 콘솔에서 실행이 가능함.

const students = [];

switch (number) {
    case 0: // 종료
        break;
    case 1: // 학생 추가
    // 추가할 학생의 정보를 입력해주세요.
    // 이름 > ~~~~
    // 점수 > ~~~~
        console.log('추가할 학생의 정보를 입력해주세요.');
        rl.question('이름 > ', (answer) => {

        // 입력 인터페이스 닫기
        rl.close();
    });
    case 2: // 학생 삭제
    // 삭제할 학생의 정보를 입력해주세요.
    // 이름 > ~~~~ 
    // 점수 > ~~~~(동명이인을 고려할 시)
        console.log('삭제할 학생의 정보를 입력해주세요.');
    case 3: // 평균 점수 보기
    // 현재 평균 점수입니다. > ~~~~
    case 4: // 최고점 학생 보기
    // 현재 가장 높은 점수를 가진 학생입니다. > ~~~~
    case 5: // JSON으로 저장
}