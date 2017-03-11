/**
 * primitive types(string, number, boolean) :  pass by value.
 * objects(objects, arrays, functions) : pass by reference.
 * */

"use strict";

/* by value */
var name = 'foo'
function doSomething(name){
    name ='bar';
}
doSomething(name);
console.log(name);  // => foo


/* by reference */
var  obj ={name : 'test'};
function changeVal(obj){
    obj.title = 'This is title'
}
changeVal(obj);
console.log(obj); // => Object {name: "test", title: "This is title"}


