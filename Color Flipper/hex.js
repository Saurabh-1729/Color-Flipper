const btn = document.getElementById('btn');
const color = document.getElementById('color');

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function get_random_color() {
    function c() {
        var hex = Math.floor(Math.random() * 256).toString(16);
        return ("0" + String(hex)).substr(-2); // pad with zero
    }
    return "#" + c() + c() + c();
}

btn.addEventListener('click', () => {
    // const val = randomIntFromInterval(0, colors.length - 1);
    // console.log(val);
    // document.body.style.background = colors[val];
    // color.textContent = color[val];
    let val = get_random_color();
    // console.log(val);
    document.body.style.background = val;
    color.textContent = val;
});
