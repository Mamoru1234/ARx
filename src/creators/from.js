import {Observable} from './../Observable';

Observable.from = function (array) {
    return new Observable((observer) => {
        var chain = Promise.resolve();
        for (let value of array) {
            chain = chain.then(() => {
                return observer.onNext(value);
            });
        }
        chain.then(() => {
            observer.onComplete();
        });
    });
};
