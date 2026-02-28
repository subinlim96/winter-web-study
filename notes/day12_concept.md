[LocalStorage]
- localStorage: 브라우저에 데이터를 저장할 수 있게 하는 것.

- 사용방법(window.localStorage. 바로 다음에 입력 후 사)
1. **setItem(): key, value 추가**
ex) window.localStorage.setItem('key', 'value') // key의 값이 value
2. **getItem(): value 읽어 오기**
ex) const key = window.localStorage.getItem('key')
4. removeItem(): item 삭제(부분삭제)
5. clear(): 도메인 내의 localStorage 값 삭제(전체 삭제)
6. length: 전체 item 갯수
7. key(): index로 key값 찾기(괄호 안에 인덱스 입력)
