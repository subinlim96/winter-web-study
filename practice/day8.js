function keyCodeCheck() {
    if (window.event.keyCode === 13) {
        const newLi = document.createElement('li'); // li 생성
        const newBtn = document.createElement('button'); // button 생성
        const newSpan = document.createElement('span'); // span 생성

        newLi.appendChild(newBtn); // li안에 button 담기
        newLi.appendChild(newSpan); // li안에 span 담기
        console.log(newLi);
    }
}