import {Observable} from './../Observable';

Observable.thrown = function (e) {
    return new Observable((observer) => {
        observer.onError(e);
    });
};
