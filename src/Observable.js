import {Observer} from './Observer';

export class Observable {
    constructor(subscriber, observer = new Observer()) {
        this.subscriber = subscriber;
        this.observer = observer;
    }
    getState() {
        return [this.subscriber, this.observer];
    }
    subscribe(observer = new Observer()) {
        const onError = (e) => {
            return this.observer.onError(e).catch((e) => observer.onError(e));
        };
        const onNext = (x) => {
            return this.observer.onNext(x)
                .then((value) => observer.onNext(value))
                .catch((e) => {
                    return onError(e);
                });
        };
        const onComplete = () => this.observer.onComplete().then(() => observer.onComplete());
        return this.subscriber(new Observer(onNext, onError, onComplete));
    }
    static create(subscriber) {
        return new Observable(subscriber);
    }
}