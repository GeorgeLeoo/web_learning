const index = require('./index');
function A() {
    return{
        $store: index
    }
}

let a = new A();

function B() {
    console.log('a ',a);
    a.$store.dispatch('saveUser');
}
new B();
