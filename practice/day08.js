const input = document.querySelector("#inputbar");
const btn = document.querySelector("#button");
const list = document.querySelector("#list");

btn.addEventListener("click", () => {
    // 여기 안에 “input 값 가져오기 → li 만들기 → ul에 추가”를 넣을 것
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement("li"); // li를 만드는 코드
    li.textContent = text; // 안전하고 추천
    list.appendChild(li);
    // 또는 list.append(li);
    input.value = "";
    input.focus();
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        // 여기 안에 “input 값 가져오기 → li 만들기 → ul에 추가”를 넣을 것
        const text = input.value.trim();
        if (!text) return;
        const li = document.createElement("li"); // li를 만드는 코드
        li.textContent = text; // 안전하고 추천
        list.appendChild(li);
        // 또는 list.append(li);
        input.value = "";
        input.focus();
    }
});