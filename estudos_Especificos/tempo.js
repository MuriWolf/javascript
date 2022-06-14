let c = 0;

const time = function() {
    c++;
    console.log(c); 
    if (c>=5) {
        // esses dois aparecem ao mesmo tempo, e não, 2seg aparece, 2seg aparece.
        setTimeout(delayDisplay, 2000)
        setTimeout(() => {
            console.log("Depois de um tempo eu apareço...")
        }, 2000)

        clearInterval(interval);
        return; 
    };
}

const delayDisplay = function() {
    console.log("uepaa")
}

let interval = setInterval(time, 1000)
