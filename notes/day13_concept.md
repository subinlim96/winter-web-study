0. 라이브러리 vs 프레임워크
   - 라이브러리: 필요할 때 가져다 쓰는 도구 모음(본 코드가 중요)
   ex) import axios from "axios"; axios.get("/users");
   - 프레임워크: 전체 구조와 이미 정해져 있고, 내가 그 안에 코드를 끼워 넣는 것(해당 구조 안에 내가 맞춰서 작성하는 느낌)

1. React: 웹사이트 화면을 만들 때 쓰는 JavaScript 라이브러리. -> 화면이 계속 바뀌는 경우 React를 사용하는 것이 편하다.
   - 컴포넌트: 화면을 작은 부품으로 나누는 것
   ex) function Button() { return <button>클릭</button>;} -> 버튼이라는 컴포넌트
   - JSX: Javacript 안에서 HTML처럼 쓰는 문법. ex) const title = <h1>제목<h1>;
   1. 반드시 부모 요소 하나가 감싸는 형태여야 한다.
   ex)
   (에러 발생)
   function App() {
	    return (
		    <div>Hello</div>
		    <div>GodDaeHee!</div>
	    );
   } -> 여기서 div들을 <div>, <Fragment>, <>로 한 뭉탱이로 묶으면 정상적인 코드가 된다.
   2. 자바스크립트 표현식
   ex)
   function App() {
	   const name = 'GodDaeHee';
	   return (
		   <div>
			   <div>Hello</div>
			   <div>{name}!</div> <-- 여기!
		   </div>
	   );
   }
   
   - state: 화면에서 변하는 값.
   
