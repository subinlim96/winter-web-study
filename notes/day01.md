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

-const
  1. 중복 선언과 재할당 불가능(상수 선언 키워드)(블록 단위)
  
  ex)
  const a = 5;
  console.log(a); // 5

  a = 10;
  console.log(a); // TypeError: Assignment to constant variable. -> **잘못된 데이터 타입** 설정
  
  2. 선언 할당 순서 상관 O(호이스팅 가능하지만 동작은 그렇지 않음)
