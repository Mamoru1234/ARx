import {Observable} from './../Observable';
import {Observer} from './../Observer';
//TODO separate injection to different file
Observable.prototype.map = function (mapFunction) {
    return map.call(this, mapFunction);
};
export function map(mapFunction) {
    const [subscriber, oldObserver] = this.getState();
    const onNext = (x) => oldObserver.onNext(x).then((value) => mapFunction(value));
    const observer = new Observer(onNext, oldObserver.onError, oldObserver.onComplete);
    return new Observable(subscriber, observer);
}
