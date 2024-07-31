//call back
function add(num1 :number, num2: number){
    console.log(num1 + num2);
    
}
add(5,5)


//example =2
function sayhello (){
    console.log("hello");
    
}
sayhello()

//example =3 
function sayhi (){
    console.log("hi...");
    
}

function adde(num1 :number, num2: number, callback:any){
    console.log(num1 + num2);
    callback();
    
}
adde(5,15,sayhello)
adde(4,6,sayhi)

//anonymous function
adde(5,1,function(){
    console.log("bye,,,");
    
})