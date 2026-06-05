// var a =10;
// let b =20;
// const c = 30;   

// console.log(a);
// console.log(b);
// console.log(c);

// var num=10;
// var str="Hello";
// var underfine;
// var Null = Null;
// var boolean = true;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof underfine);
// console.log(typeof null);
// console.log(typeof boolean);

// var arr = [1, 2, 3, 4, 5];
// console.log(typeof arr , arr);
// var obj={
//     name:"John",
//     dept:"IT"
// }
// console.log(typeof obj , obj);


//arithmetic operators(+,-,*,/,%,++)
// var a = 10;
// var b = 5 ;

// console.log(a + b); //concatenation
// console.log(a - b); 
// console.log(a * b);
// console.log(a / b);
// console.log(a % 3);

// logical operator (&&,||,!)
//                 &&   ||
// true true      true  true
// true false     false true
// false true     false true
// false false    false false

// var a = true;
// var b = false;

//console.log(a&&b)
//console.log(a|b)

// a=20;
// b=30;

// console.log(a<b);
// console.log(a>b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a++);
// console.log(++a);

// var a=10;

// console.log(a--);
// console.log(--a);

//{
// //condition statements
// var a = 20;
// var b = 10;
// //if condition
// if (true){
//    template literals
//     console.log('${a}+${b}=${a+b}')

//}

// if(true){
//     a = 10 ;
//     console.log(a);
// }
// var a; //hoisting
// console.log(a);
// var a = 10; //global scope
// let b = 20; //block scope
// const c = 20; //block scope
// if (true){
//     console.log(a);
//     //let b = 30 //block scope
// }
// // console.log(a);
// // console.log(b);

// var a = 10;
// if(a%2===0){
//     console.log('${a} is even');

// }
// esle{
//     console.log('${a} is odd ');
// }
// var mark = 30;
// if(mark>=90){
//     console.log("B grade");

// }
// else if(mark >= 70){
//     console.log("A grade");

// }
// else if(mark >= 35){
//     console.log("pass")
// }
// else{
//     console.log("fail");

// }

// var a = 10;
// // condition ? true statement: false statement
// var result = a%2===0?"even":"odd";
// console.log(result)

// 

// var day =2;
// switch(day){
//     case 1 : {
//         console.log("sunday");
//         break;
//     }
//      case 2 : {
//         console.log("monday");
//         break;
//     }
//      case 3 : {
//         console.log("tuesday");
//         break;
//     }
//      case 4 : {
//         console.log("wednesday");
//         break;
//     }
//      case 5 : {
//         console.log("thursday");
//         break;
//     }
//      case 6 : {
//         console.log("friday");
//         break;
//     }
//      case 7 : {
//         console.log("saturday");
//         break;
//     }
//     default:{
//         console.log("invalid statement");
//     }
// }

// looping statement

// 1 tmie 11 times 10 times
// for (var i=1; i<=19 ; i++) {
//     console.log(i);

// }
// var val = 1024;
// var count = 0;
// while(val > 0){
//     count++;
//     val= Math.floor(val/10);
// }
// console.log(count);

// for(let i = 1;i<=10;i++){
//     if(i%2==0){
//         continue;
    
//     }
//     console.log(i);
// }
// add(); // hoisting

// function add(){
//     console.log(10+20);
// }

// add() //hoisting
function add(a,b){
console.log(a+b);

}

add(10,20);
