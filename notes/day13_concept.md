0. 라이브러리 vs 프레임워크
   - 라이브러리: 필요할 때 가져다 쓰는 도구 모음(본 코드가 중요)
   ex) import axios from "axios"; axios.get("/users");
   - 프레임워크: 전체 구조와 이미 정해져 있고, 내가 그 안에 코드를 끼워 넣는 것(해당 구조 안에 내가 맞춰서 작성하는 느낌)

1. React: 웹사이트 화면을 만들 때 쓰는 JavaScript 라이브러리. -> 화면이 계속 바뀌는 경우 React를 사용하는 것이 편하다.
   - 컴포넌트: 화면을 작은 부품으로 나누는 것
   ex) function Button() { return <button>클릭</button>; } -> 버튼이라는 컴포넌트
   - JSX: Javacript 안에서 HTML처럼 쓰는 문법. ex) const title = `<h1>제목<h1>;`
   1. 반드시 부모 요소 하나가 감싸는 형태여야 한다.
   ex)
   (에러 발생)
   function App() {
	    return (
		    <div>Hello</div>
		    <div>GodDaeHee!</div>
	    );
   } -> 여기서 div들을 `<div>`, `<Fragment>`, <>로 한 뭉탱이로 묶으면 정상적인 코드가 된다.
   2. 자바스크립트 표현식
   ex)
   `function App() {
	   const name = 'GodDaeHee';
	   return (
		   <div>
			   <div>Hello</div>
			   <div>{name}!</div> <-- 여기! 변수를 넣을 때는 중괄호 사용
		   </div>
	   );
   }`
   3. class 정의 -> `<div class="example"></div>`로 표현하는 대신, className로 사용해야 한다.

   - state: 화면에서 변하는 값.
   - babel: React에서 JSX를 사용할 수 있게 JSX를 JavaScript로 변환하는 역할을 하는 것. -> 우리가 JSX를 사용하면 어떤 키워드를 굳이 가지지 않고 컴퓨터가 이해할 수 있게 변환함.
   
