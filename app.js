const storedBgColor = localStorage.getItem("bgColor");

document.querySelector('input').addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        document.body.style.background = (`rgba(${document.querySelector('input').value})`)
        const bgColor = document.body.style.backgroundColor;
        localStorage.setItem("bgColor", bgColor);
    }
})

if (storedBgColor) {
    document.body.style.backgroundColor = storedBgColor;
    
}