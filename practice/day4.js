const promise = () => new Promise((resolve, reject) => {
    let a = 1 + 1

    if(a == 2) {
        resolve('success')
    } else {
        reject('failed')
    }
})

promise().then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch' + message)
})

function addOne(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num + 1);
    }, 1000);
  });
}

try {
  let result = riskyOperation(); // 오류가 발생할 가능성이 있는 함수 호출
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("This will always run, no matter what.");
}

// ------------------------------------

// 2초 후 출력하는 함수 만들기 (setTimeout)
// 내 답
function printnum(number) {
    return setTimeout(() => {
        console.log(number+1);
    }, 2000);
}

printnum(5);

// 지피티 답
function printnum(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(number + 1); // 콘솔에 출력
            resolve(number + 1); // 다음을 위한 약속(중요)
        }, 2000);
    });
}

//async 함수 작성 / await 연습
async function anything() {
    const access = await printnum(2);
    const access1 = await printnum(access);
    const access2 = await printnum(access1);
}

anything();

// 에러 처리 테스트
try
{   const examp = ObjectTV();
    console.log(5);
} catch(error) {
    console.error("야 여기 이상한 거 있다. ->", error.message)
} finally {
    console.log("지금은 처리 중이오니 잠시만 기다려주십시오.")
}