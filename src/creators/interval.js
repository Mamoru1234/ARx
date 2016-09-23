import {Observable} from './../Observable';

Observable.interval = function (period) {
    var i = 0;
    return new Observable((observer) => {
        function schedule() {
            observer.onNext(i);
        }
        schedule();
    });
};
