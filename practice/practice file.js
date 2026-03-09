window.localStorage.clear(); // setItem
window.localStorage.setItem('name', 'anna');
window.localStorage.setItem('age', 20);


for (const key in window.localStorage) {
    if(window.localStorage.hasOwnProperty(key)) {
        const value = window.localStorage.getItem(key);
        document.body.innerHTML = key + " : " + value + "<br />";
    }
}