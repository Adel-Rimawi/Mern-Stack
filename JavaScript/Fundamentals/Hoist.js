// Assignment: JavaScript Hoisting




//example
var example;
console.log(example);
example = "I'm the example!";



//1
var hello;
console.log(hello);                                   
hello = 'world';


//2
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();

//3

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); //super cool

//4
var food = 'chicken';
function eat(){
    food = 'half-chicken';
    console.log(food); // half-chicken
    var food = 'gone';
}
console.log(food);// chicken
eat();

//5 
mean(); // error
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food); 
    var food = "fish";
    console.log(food); 
}
console.log(food); 


//6 
var genre;
console.log(genre);
genre = "disco";
function rewind() {
    genre = "rock";
    console.log(genre);//rock
    var genre = "r&b";
    console.log(genre);// r&b
}
rewind();

console.log(genre); // disco

// 7
dojo = "san jose";
function learn() {
    dojo = "seattle";
    console.log(dojo); // (2nd)
    var dojo = "burbank";
    console.log(dojo); // (3rd)
}
console.log(dojo); // san jose (1st)
learn();

console.log(dojo); // san jose (4th)




  
//function akedojo()
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}

// true
// closed for now
//we fixed dojo . hiring in line 12