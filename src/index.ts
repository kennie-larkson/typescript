// console.log("Hello world!");
// function greeting(name: string) : string {
//    return `Hello ${name}`;
// }

import { runInThisContext } from "vm";

// console.log(greeting("Kennie"));



// const name: string = " Kehinde ";
// const score1: number = 15;
// const score2: number = 23.75;
// const sum = score1 + score2;
// console.log(name);
// console.log(`first score ${score1}`);
// console.log(`second score ${score2}`);
// console.log(`sum of scores: ${sum}`);

// const num: string = 'Hello';


// const global_num = 15;  //global variable

// class Numbers {
//     num_val = 23;          //class variable or field
//     static sval = 10;       //static variable

//     storeNum(): number {
//         const local_num = 14;     //local variable
//         return local_num
//     }
// }

// console.log(`Global num: ${global_num}`);
// console.log(`Static val: ${Numbers.sval}`);  //static variable
// const obj = new Numbers();
// console.log(`Class val: ${obj.num_val}`);
// console.log(obj.storeNum());

const age = 23;
console.log(age+3);

 class Staff {
    // id:number = 30;
    // name:string = 'Lawal' ;
    

    employee = (id:number, name:string): any => {
       return `${id} : ${name}`
    }
 }

const newEmployee = new Staff();


console.log(newEmployee.employee(17, 'Lawal'));


    
// if (age > 20) console.log("Adult");
// console.log("Teenager");

// ( age > 20 )? console.log("Adult") : null;
// console.log('done');
const anonymousFunction = (name: string) =>  name;
console.log(anonymousFunction("Kennie"));






    






