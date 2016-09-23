var Observable = require('./build/Observable').Observable;
var Observer = require('./build/Observer').Observer;
require('./build/operators/map');
require('./build/creators/from');

function sleep(period) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, period);
    });
}

const observer = new Observer((val) => {
    // console.log(val);
}, (e) => {
    console.log(e);
}, () => {
    console.log('completed');
});

Observable.create((observer) => {
    observer.onComplete();
    // observer.onComplete();
}).subscribe();

// Observable
//     .from([1, 2, 3, 4])
//     .map((value) => {
//         console.log(value);
//         return sleep(1000);
//     })
//     .subscribe(observer);
