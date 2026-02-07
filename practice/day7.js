const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('== 학생 정보 시스템 ==');
console.log('0. 시스템 종료');
console.log('1. 학생 추가');
console.log('2. 학생 제거');
console.log('3. 평균 점수');
console.log('4. 최고 점수');
console.log('5. JSON 변환');

//var numbering;

var students = [];

function showMenu() {
    rl.question('선택 > ', (number) => {
        switch (number) {
            case "0":
                rl.close();
                break;
            case "1":
                console.log('추가할 학생의 정보를 입력해주세용~~');
                rl.question('이름 > ', (name) => {
                    rl.question('점수 > ', (grade) => {
                        students.splice(students.length, 1, {이름: name, 점수: grade});
                        console.log(students);
                        showMenu();                  
                    });
                });
                break;
            case "2":
                console.log('제거할 학생의 정보를 입력해주세용~~');
                rl.question('이름 > ', (name) => {
                    students.forEach((item, index) => {
                        if (item.이름 == name) {
                            students.splice(index, 1);
                            console.log(students);
                            showMenu();
                        }
                    });
                });
                break;
            case "3":
                var sum1 = 0;

                for (var i of students)
                    sum1 += parseInt(i.점수, 10);
                console.log('현재 평균 점수는', sum1 / students.length, '점입니다.');
                showMenu();
                break;
            case "4":
                var max1 = 0;

                for (var i of students) {
                    if (max1 < parseInt(i.점수, 10))
                        max1 = parseInt(i.점수, 10);
                }
                console.log('현재 최고 점수는', max1, '점입니다.');
                showMenu();
                break;
            case "5":
                const jsonchan = JSON.stringify(students);
                console.log(jsonchan);
                showMenu();
                break;
        }
    });
}
showMenu();