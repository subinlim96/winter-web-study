기본 문법 요약

<var, let, const의 차이점>
- var
  1. 중복 선언과 재할당 가능(함수 단위) -> 사용 빈도 감소
  
  ex)
  var a = 5; 
  console.log(a); // 5

  var a = 10; // 중복 선언
  console.log(a); // 10

  a = 15; // 재할당
  console.log(a); // 15

  2. 선언 할당 순서 상관 X(호이스팅 가능)
  
- let
  1. 중복 선언 불가능, 재할당 가능(블록(for, if) 단위)
  
  ex)
  let a = 5;
  let a = 10; // 중복 선언
  console.log(a); // SyntaxError: Identifier 'a' has already been declared -> **문법적 오류(SyntaxError)** 발생

  ex)
  let a = 5;
  console.log(a); // 5

  a = 10; // 재할당
  console.log(a); // 10

  2. 선언 할당 순서 상관 O(호이스팅 가능하지만 동작은 그렇지 않음)

- const
  1. 중복 선언과 재할당 불가능(상수 선언 키워드)(블록 단위)
  
  ex)
  const a = 5;
  console.log(a); // 5

  a = 10;
  console.log(a); // TypeError: Assignment to constant variable. -> **잘못된 데이터 타입** 설정
  
  2. 선언 할당 순서 상관 O(호이스팅 가능하지만 동작은 그렇지 않음)


<자료형>
1. 원시 타입(후에 값 변경 X)
   - Number : 숫자 표현
   - BigInt : 숫자 표현, Number보다 더 큰 정수 저장, 연산 가능

     ex)
     const BiggestInt1 = 9007199254740991n; // 정수 끝에 n 추가
     const BiggestInt2 = BigInt(9007199254740991); // 생성자 호출
     
   - String : 문자열 표현(값은 불변하나, 가리키는 값은 바뀔 수 있)
   - Boolean : 참 or 거짓 표현(0, null, undefined, NaN 모두 false)
   - Undefined : 선언 후 값이 할당되지 않은 변수 표현
   - Null : 변수에 값이 없다는 것을 명시하는 용도
   - Symbol : 이름의 충돌 위험이 없는 고유한 값을 만들기 위해 사용
2. 참조 타입
   - Object :
  

<조건, 반복문>
1. if/ else if/ else
2. condition ? value1 : value2

   ex)
   <script>
	   console.log(id === yura' ? 'yes' : 'no'); //yes
   </script>
3. switch statement (if문에서 else if를 여러 번 반복 시 유용)

   ex)
   <script>
    const browser = 'Firefox';
    
    switch (browser){
        case 'IE': 
            console.log('go away!');
            break;
        case 'Chrome':
        case 'Firefox':     //같은 값일 땐 연달아서 작성 
            console.log('love you');
            break;
        default:
            console.log('same all');
            break;
    }   //love you
   </script> // browser가 될 수 있는 경우들
4. while loops
5. do while (코드 실행 후 조건식 확인) -> 사용자 입력을 받을 때, 초기 상태가 의미 없을 때 등 본문이 최소 한 번은 실행되어야 할 때 사용
6. for(begin; condition; step)
7. nested loops 중첩 반복문(CPU에 좋지 않아 사용 빈도 적음)
