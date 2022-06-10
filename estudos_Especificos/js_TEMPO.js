let c = 0;

const time = function time() {
    console.log(c); 
    c++;
    if (c>5) {
        clearInterval(interval);
        return; 
    };
}

setTimeout(time, 1000*3)
let interval = setInterval(time, 1000)