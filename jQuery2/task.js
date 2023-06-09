function countDown(countFrom){
    postMessage(countFrom--);
    if(countFrom < 0){
        postMessage("end");
        return;
    };
    setTimeout("countDown(" + countFrom + ")", 1000);
};

self.onmessage = function(e){
    switch(e.data.cmd){
        case "start":
            countDown(e.data.countFrom);
            break;
        default:
            postMessage("error");
    }
}