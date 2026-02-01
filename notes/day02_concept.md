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
   
