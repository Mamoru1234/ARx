
function defaultOnNext(x) {
    return Promise.resolve(x);
}

function defaultOnComplete() {
    return Promise.resolve();
}
function defaultOnError(e) {
    return Promise.reject(e);
}
export class Observer {
    constructor(onNext = defaultOnNext, onError = defaultOnError, onComplete = defaultOnComplete) {
        this._onNext = onNext;
        this._onComplete = onComplete;
        this._onError = onError;
        this._completed = false;
    }
    isCompleted = () => {
        return this._completed;
    };
    onNext = (value) => {
        return this._onNext(value);
    };
    onComplete = () => {
        if (this.isCompleted()) {
            throw new Error('Observable is already completed');
        }
        this._completed = true;
        return this._onComplete().then();
    };
    onError = (e) => {
        return this._onError(e);
    };
}
