const https = require('http');
const postId = '6294775093264384';
const loopTimes = 200;

const makeRequest = (i) => {
    https.get('http://www.studentcoursereview.com/ajax/review_vote?id=' + postId + '&direction=up');
    console.log('Sent request #' + i)
}

let i = 0;

const loop = setInterval(() => {
    if (i === loopTimes) {
        return clearInterval(loop);
    }
    
    makeRequest(i);
    i++;
}, 500);