// initial count
let count = 0;

// select value
const value = document.querySelector("#value");

teste();
//function color
function colorVerify(num) {
    if (num > 0) 
       return value.style.color = "green";
    
    if(num < 0) 
        return value.style.color = "red";
   
    return value.style.color = "hsl(205, 86%, 17%)";
    
}

//functions
function increase() {
    count++;
    value.textContent = count;
    colorVerify(count);
}

function decrease() {
    count--;
    value.textContent = count;
    colorVerify(count);
    
}

function reset() {
    count = 0;
    value.textContent = count;
    colorVerify(count);
}
