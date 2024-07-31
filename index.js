//call back
function add(num1, num2) {
    console.log(num1 + num2);
}
add(5, 5);
//example =2
function sayhello() {
    console.log("hello");
}
sayhello();
//example =3 
function sayhi() {
    console.log("hi...");
}
function adde(num1, num2, callback) {
    console.log(num1 + num2);
    callback();
}
adde(5, 15, sayhello);
adde(4, 6, sayhi);
//anonymous function
adde(5, 1, function () {
    console.log("bye,,,");
});
export {};
