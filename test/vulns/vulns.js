var t = 0;

function a(){
    return t+1;
}

function b(){
    if (a() == t+1) {
        alert(t);
        t = t + 1;
    }
}

setTimeout(b(), 1000);