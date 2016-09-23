class A {
    method() {
        console.log(this);
    }
}

var a = new A();

const context = {};

context::a.method();

export default a;
