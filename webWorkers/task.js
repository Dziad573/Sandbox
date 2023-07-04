function countDown(countFrom){
    postMessage(countFrom);
    countFrom--;
    if(countFrom < 0){
        postMessage("end");
        return;
    }
    setTimeout(function() {
        countDown(countFrom);
    }, 1000);
}

onmessage = function(e){
    switch(e.data.cmd){
        case "start":
            countDown(e.data.countFrom);
            break;
        default:
            postMessage("error");
    }
}