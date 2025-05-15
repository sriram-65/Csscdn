// class Person{
//     constructor(name , age){
//         this.name = name,
//         this.age = age
//     }
//     greet(){
//         return `hello ${this.name}`
//     }

//     greetWithName(username){
//         this.username = username;
        
//     }
// }


// const person1 = new Person("sriram" , 17)
// person1.greetWithName("hello")
// console.log(person1.username)


//Geters and Setters

// class MainClass{
//     constructor(name,age){
//        this.name = name,
//        this.age = age
//     }

//     set personName(name){
//         this.name = name
//     }
//     get personName(){
//         return this.name
//     }
// }

// const person1 = new MainClass("sriram" , 17)
// console.log(person1.personName)
// person1.personName = "SRIRAM"
// console.log(person1.personName)


// class expresions
// class expressions are unkownd or not named 

// let Person = class{
//     constructor(name){
//         this.name = name
//     }

//     greet(){
//         return `Hello , ${this.name}`
//     }
// }

// const person1 = new Person("Meta Ceo")
// console.log(person1.greet())

// class inhertiance

// class Person{
//     constructor(name,job,age){
//         this.name = name,
//         this.age = age,
//         this.job = job
//     }

//     Greet(){
//         return `Hello ,  ${this.name} and Your Age is ${this.age} and your Job is ${this.job}`
//     }
// }

// class GetDeatils extends Person{

// }

// const person1 = new GetDeatils("sriram" ,"Ceo at Meta" , 17)
// console.log(person1.Greet())


// class Person{
//     constructor(name){
//         this.name = name
//     }
// }


// class Child extends Person{
//     constructor(name , grade){
//         super(name)
//         this.grade = grade;
//     }

//     greet(){
//         return `Hello ${this.name} and Your Grade is ${this.grade}`
//     }
// }

// const person1 = new Child("SRIRAM"  , 12)
// console.log(person1.greet())


// static method

// class Person{
//     constructor(name){
//         this.name = name
//     }

//     static greet(){
//         console.log("hello")
//     }
// }


// const Person1 = new Person("SRIRAM")

// create panna object la irundhu greet (static) function na call panna mudiyathu aaana Class name vachu antha function na call panalam

//another way


// class Person{
//     constructor(name){
//         this.name = name
//     }

//     static greet(x){
//         console.log("hello" , x.name)
//     }
// }


// const person1 = new Person("SRIRAM")

// Person.greet(person1) // this is static

//keywords => set , get , static


// js Private Methods

// class Person{
//     constructor(fisrtname , Lastname){
//         this.fisrtname = fisrtname,
//         this.Lastname = Lastname
//     }

//     #greet(){
//         return `Hello ${this.fisrtname} and ${this.Lastname}`
//     }

//     display(){
//         return this.#greet()
//     }
// }

// const person1 = new Person("SRIRAM" , "RAJA")
// console.log(person1.display())


//# means private varible that is only accessble for Inside the class 

//object Destrcuting

// const person = {
//     fname:"SRIRAM",
//     lname:"RAJA"
// }

// const {fname , lname} = person

// console.log(fname)


// callback

// function result(res){
//     console.log(res)
// }

// function add(num1 , num2 , myCallback){
//     let sum = num1+num2
//     myCallback(sum)
// }

// add(1,2 , result)


// function countDown(num){
//     console.log(num) // 10 // 9 /8
//     num--; //9 // 8 // 7....
//     if(num>=0){ // is TRUE / is True...
//        countDown(num) // 9 /8...
//     }
// }


// countDown(10)

// do while 


// let i = 1

// do{
//     console.log(i)
//     i++
// }while(i<=5)

// the diffrence betweeb != and !== are the same but ...

// console.log(5!='5')  // false because the number is 5 and another number '5' which is in string soo the string also converted into number
// console.log(5!=='5') // this is TRUE because this is Strict Operator 

// same ahh irundha false different ahh irundha true

let letters = '1234567890ABCDEF';

function getcolorcode(){
    let colors = '#';
    for(let i=0; i<=6; i++){
       colors+=letters[Math.floor(Math.random()*16)]
    }
    return colors
}

console.log(getcolorcode())
