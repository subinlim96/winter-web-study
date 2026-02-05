// fetch('https://api.example.com/data')
//   .then(response => response.json()) // 응답을 JSON으로 파싱
//   .then(data => console.log(data))   // 파싱된 데이터 출력
//   .catch(error => console.error('Error:', error));
// // then은 실제 데이터로 바꿔주는 역할을 함

// async function newfunc() {
//     try{
//         const response = await fetch('https://api.example.com/data');
//         const data = await response.json();
//         console.log(data);
//     } catch(error) {
//         console.error('Error:', error);
//     }
// }
// newfunc();
// // 위 코드를 async/ await를 이용해서 바꾼 코드(의미 동일)

// fetch('https://api.example.com/data', {
//   method: 'POST', // 서버에 데이터를 보낼 예정
//   headers: {
//     'Content-Type': 'application/json' // JSON 형식으로 보낼 예정
//   },
//   body: JSON.stringify({
//     key1: 'value1',
//     key2: 'value2'
//   })
// }) // options 객체에 메서드와 바디를 설정
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));

// async function newfunction() {
//     try {
//         const response = await fetch('https://api.example.com/data', {
//                             method: 'POST', // 서버에 데이터를 보낼 예정
//                             headers: {
//                                     'Content-Type': 'application/json' // JSON 형식으로 보낼 예정
//                             },
//                             body: JSON.stringify({
//                                 key1: 'value1',
//                                 key2: 'value2'
//                             })
//                         })
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }
// newfunction();

// API 사용해서 데이터 받아오기, 콘솔 출력, 원하는 값만 가공
// API 키: dfe1352d6387ee076101d2ea3bc03d62(like 비밀번호)
const API_KEY = "f93c607bbca14a9f989105010260502";

fetch('https://api.weatherapi.com/v1/current.json?key=f93c607bbca14a9f989105010260502&q=Busan&lang=ko')
.then(response => response.json())
.then(data => {const temp = data.current.temp_c;
                const place = data.location.name;
                const time = data.location.localtime;
                const result = {
                    place: place,
                    time: `${time}s`,
                    temperature: `${temp}℃`,
                    cloudy: `${data.current.cloud}`
                };
                console.log(result);
            })
.catch(err => console.error(err));

// async/await 버전
async function newAPI() {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=f93c607bbca14a9f989105010260502&q=Jinju&lang=ko');
        const data = await response.json();

        const temp = data.current.temp_c;
        const place = data.location.name;
        const time = data.location.localtime;
        const result = {
            place: place,
            time: `${time}s`,
            temperature: `${temp}℃`,
            cloudy: `${data.current.cloud}`
         };
        console.log(result);
    } catch(error) {
        console.error('Error:', error);
    }
}

newAPI();
