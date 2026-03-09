const input = document.querySelector("#inputbar");
const btn = document.querySelector("#button");
const list = document.querySelector("#list");
// HTML에 있는 요소를 JS로 가져와 사용하기 위함.
//var text_add = $("#text_add").val();
    // id가 text_add인 입력창의 값을 가져온다.
    // 위위의 코드와 결과가 동일한 코드이다.
    // but, jQuery 라이브러리를 필요로 한다. ($ = jQuery 함수)

console.dir(btn);

// '추가' 버튼을 클릭했을 시 실행
btn.addEventListener("click", () => {
    // 여기 안에 “input 값 가져오기 → li 만들기 → ul에 추가”를 넣을 것
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement("li"); // li를 만드는 코드
    const checkbox = document.createElement("input"); // 체크박스를 만드는 코드
    const span = document.createElement("span"); // 글을 만드는 코드
    // 취소선을 글자에만 적용하고 싶다면 이걸 만들어야 함.
    const dele = document.createElement("button");
    dele.textContent = "삭제";
    dele.classList.add("style");
    const edit = document.createElement("button");
    edit.textContent = "수정";
    edit.classList.add("style1")
    document.querySelector("#list").addEventListener("click", function(e) {
        if (e.target.textContent === "삭제") {
            // 원래 e.target.tagName === "BUTTON"이었는데 수정버튼과 차이가 없음
            // ==(타입 상관없이 값만 봄) vs ===(타입과 값 모두 봄)
            e.target.parentElement.remove();
        } // e.target = 사용자가 실제로 클릭한 요소
    });
    checkbox.type = "checkbox"; // 체크박스를 만드는 코드
    span.textContent = text; // textContent를 사용하면 글을 넣을 수 있음
    // console.dir(checkbox.checked);
    checkbox.addEventListener("change", () => { // click or change 상관없음
        // 체크박스를 클릭하면 체크가 되어 상태가 바뀌므로 change를 사용해도 no problem
        span.classList.toggle("done", checkbox.checked);
        // toggle은 on/off 개념이다.
        // 클래스에 done이 있으면 삭제, 없으면 추가(done에 효과, 스타일을 css로 넣음)
    })
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(dele);
    li.appendChild(edit);
    list.appendChild(li);
    const liString = JWSON.stringify(li);
    window.localStorage.setItem('line', liString);
    const lineString = window.localStorage.getItem('line');
    const lineli = JSON.parse(lineString);
    document.body.innerHTML = lineli;
    // 또는 list.append(li);
    input.value = "";
    input.focus();
});

// enter 키를 눌렀을 시 실행
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        // 여기 안에 “input 값 가져오기 → li 만들기 → ul에 추가”를 넣을 것
        const text = input.value.trim();
        if (!text) return;
        const li = document.createElement("li"); // li를 만드는 코드
        const checkbox = document.createElement("input"); // 체크박스를 만드는 코드
        const span = document.createElement("span"); // 글을 만드는 코드
        // 취소선을 글자에만 적용하고 싶다면 이걸 만들어야 함.
        const dele = document.createElement("button");
        dele.textContent = "삭제";
        dele.classList.add("style");
        const edit = document.createElement("button");
        edit.textContent = "추가";
        edit.classList.add("style1")
        document.querySelector("#list").addEventListener("click", function(e) {
            if (e.target.textContent === "삭제") {
                e.target.parentElement.remove();
            } // e.target = 사용자가 실제로 클릭한 요소
        });
        console.dir(dele);
        checkbox.type = "checkbox"; // 체크박스를 만드는 코드
        span.textContent = text; // textContent를 사용하면 글을 넣을 수 있음
        // console.dir(checkbox.checked);
        checkbox.addEventListener("change", () => { // click or change 상관없음
            // 체크박스를 클릭하면 체크가 되어 상태가 바뀌므로 change를 사용해도 no problem
            span.classList.toggle("done", checkbox.checked);
            // toggle은 on/off 개념이다.
            // 클래스에 done이 있으면 삭제, 없으면 추가(done에 효과, 스타일을 css로 넣음)
        })
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(dele);
        li.appendChild(edit);
        list.appendChild(li);
        // 또는 list.append(li);
        input.value = "";
        input.focus();
    }
});