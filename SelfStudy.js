`use strict`;

/*const asyncFunc = async () => {
//    return 'ghbdtn';
throw new Error('this is error');
};

asyncFunc()
.then(v => console.log(v))
.catch(err => console.log('err: ' + err.message));*/


/*const a = () => new Promise((resolve, reject) => setTimeout(() => resolve(), 10000));

const asincA = async () => {

    const startTime = performance.now();
    console.log(startTime);
    await a();
    const endTime = performance.now();
    console.log(`time of performance: ${endTime-startTime}`);
} 

asincA();*/




const asyncA = async (httpQuery) => {

 const res = await fetch(httpQuery);
 return await res.json();
}

/*asyncA('https://jsonpceholder.typicode.com/todos')
.then(res => console.log(res))
.catch(err => console.log(`err: ${err}`));*/

try{
    const a = await asyncA('https://jsonplaceholder.typicode.com/todos');
    console.log(a);
}
catch(err){

}



// asyncA('https://jsonplaceholder.typicode.com/todos');

/*const prom = new Promise((resolve, reject) =>
{   
    //get data from server
});

prom
    .then(value => {

    })
    .catch(err => {

    });*/
    

   /* fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));*/

    /*const getFoods = (url) => new Promise((res, reg) => 
        fetch(url)
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    );

    getFoods('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(err => console.log(err));*/

    


// class ProArray extends Array{

//     sum(){
//         return this.reduce((ell, s)=> s += ell, 0);
//     }
// }

// const arr = new ProArray(1,2,3);

// console.log(arr.sum());

/*class newClass {

    constructor(name){
        this.fieldName = name;
    }

    getFullName(){
        console.log(` Карабанов ${this.fieldName}`);
    }

    static getAge() {
        console.log(`33`);    
    }

}

const exm = new newClass('ilia');
exm.getFullName();
newClass.getAge();
console.log(exm instanceof newClass);
console.log(exm instanceof Object);
console.log(exm instanceof Number);*/

/*import prinNme from './index2.mjs';
import {
    v1 as newV1, 
    v2
} from './index2.mjs';
prinNme();

console.log(newV1);
console.log(v2);*/

/*const ar = [1,2,3];
ar.forEach((element, index) => {console.log(`${element}: ${index}`)})*/

/*const obj = {
    name: 'ilia',
    age: 33,
   // maried: true
}

const userInfo = ({name, age, maried})=> {
    if (!maried){
        console.log(`User data: ${name} ${age}`)
    }
    else{
        console.log(`User data: ${name} ${age} ${maried}`);
    }
}

userInfo(obj);



const user = {
    family: {
        mather: 'Angela',
        father: 'Ihor',
    },
    sex: 'F',
    age: 33,
};

const {family : { mather: userMather, father : userFather}} = user;
//const {userFamily: family} = user;

const mName  = user.family?.mather;
const {age, ...otherOserProps} = user;
const user2 = {...user, sex: 'M'};




const newMass = [1, 2];
const {one, two} = newMass;

const newobj = {
    name: 'ilia',
    age: 33,
    maried: true
}
const {name, age} = newobj;
const {maried} = newobj;*/

/*const myArray = [1,2,false,`ilia`];
const myArray2 = new Array(1,2,false,`ilia`);
console.log(myArray.length);
myArray.push(NaN);
const removedLastElement = myArray.pop();//remove last element
myArray.unshift(null);//add in start mass
const removedfIRSTElement = myArray.shift();//REMOVE first element

const m3 = m2.concat(m1);

myArray.forEach(el=>console.log(el));
const myArray3 = myArray.map(el=> el + 'new');
console.log(myArray3);*/

/*const newErrror = ()=> {
    throw new Error('some error');
}

try{   
    newErrror();
}
catch(error){
    console.log(`We catch erorr: ${error.message}`);
}*/

/*const p = (obj, c = Date())=>{
   const obj2 = {...obj, c};
   return obj2
}
console.log(p());
//OR
const p2 = (obj, c = Date())=>({...obj, c});
 console.log(p2());*/

/*let a = 10;
function f(a){
    let c = 1;
    c++;
    console.log(a);
    return c;
}

console.log(typeof f);
console.log(f(a));*/

//функциональное выражение
/*let d = function (a) {
    let c = 1;
    c++;
    console.log(a);
    return c;
}
//console.log(d(a));

setTimeout(function () {
    let c = 1;
    c++;
    console.log(c);
}, 1000);

setTimeout(()=> {
    let c = 1;
    c++;
    console.log(c);
}, 1000);*/


/*const obj = {
    first: 1,
    sec: 2
};

const obj2 = {...obj, third: 3};

obj2.fourth = 4;
//console.log(obj2);

const obj3 = {...obj, ...obj2};
console.log(obj3)*/

/*const obj = {};
console.log(!!obj);*/


/*let a = 5;

function f(){
    function innerF(){
        console.log(a);
    }
    innerF();
}

f();*/



/*let a = 1, b = 1;

function f1(){
    let a = 1;
    a++;
    b++;
}

f1();
console.log(a);
console.log(b);*/

/*function printMyName(){
    console.log("Ilia");
}

setTimeout(printMyName, 1000);*/

/*const person = {
    name: `Ilia`,
    age: 33
};

function fSec(p){
    p.age++;
}
fSec(person);
console.log(person.age);

function fTh(p){
    const updateP = Object.assign({}, p);
    updateP.age++;
    return updateP;
}
;
console.log(fTh(person));
console.log(person);

const f = () => {console.log(`It is work!`)};

f();

function myF(a, b) {
    a++;
    b++;
    return a + b;
}
const a = 1;
const b = 1;

console.log(myF(a, b));*/

/*const myObject = {
    a: true,
    b: ()=> {console.log('It is work!')},
    c: {
        f: 1,
        d: 1      
    }
}

const myObject2 = Object.assign({}, myObject);
console.log(myObject2.a);
console.log(myObject2.c.f);
myObject2.a = false;
myObject2.c.f = 2;
console.log(myObject.a);
console.log(myObject.c.f);

//OR

const myObject3 = {...myObject};
console.log(myObject3.a);
console.log(myObject3.c.f);
myObject3.a = 'n3';
myObject3.c.f = 3;
console.log(myObject.a);
console.log(myObject.c.f);

//OR

//const myObjectJSON4 = JSON.stringify(myObject);
//const myObject4 = JSON.parse(myObjectJSON4);
const myObject4 = JSON.parse(JSON.stringify(myObject));
console.log(myObject4.a);
console.log(myObject4.c.f);
myObject4.a = 'n4';
myObject4.c.f = 4;
console.log(myObject.a);
console.log(myObject.c.f);


//OR FREFER!

const myObject5 = structuredClone(myObject);

*/
//JSON
/*const StringJSON = `{
    "id": 1,
    "name": "Ilia"
}`;

const JSObject = JSON.parse(StringJSON);
console.log(JSObject.id);
console.log(JSObject.name);

const StringJSON2 = JSON.stringify(JSObject);
console.log(StringJSON2);*/

/*const myObject = {
    a: true,
    b: ()=> {console.log('It is work!')}
}

console.log(myObject.a);
myObject.b();

const myObject2 = {
    a: true,
    b() {console.log('It is work!')}
}




console.log(myObject2.a);
myObject2.b();*/




/*window      - for brouser
global      - for nodeJS
globalThis  - common*/


/*const city = 'Minsk';
const NAME_FIELD = 'popular';
const myCity = {
    city: city,
    isCapital: true,
    info: {
        isBig: true,
        isBeautiful: true,
    }
}
console.log(myCity);

myCity.isCapital = false;
myCity.neerby = true;
console.log(myCity);

delete myCity.city;
console.log(myCity);

myCity[NAME_FIELD] = true;
console.log(myCity);

delete myCity.info['isBig'];
console.log(myCity);


const myCity2 = {
    city,
    isCapital: true,
    info: {
        isBig: true,
        isBeautiful: true,
    }
}
console.log(myCity2);*/

/*const objectA = {
    a: 10,
    b: true
}

const copyOfA = objectA;

copyOfA.a++;
objectA.a++;

objectA.c = 'abc';

console.log(objectA.a);
console.log(copyOfA.c);*/

/*function a() {
    return "It is function";
}
console.log(a());

a = 10;
console.log(a);*/

/*const a = ()=>{
    return "It is function";
}
console.log(a());*/

/*let a = null || 9;
console.log(a);
let a1 = true && 9;
console.log(a1);
let a2 = 9 && 1;
console.log(a2);
let a3 = true || 9;
console.log(a3);
let a4 = NaN || 9;
console.log(a4);
let a5 = null ?? 10;
console.log(a5);
let a6 = Number(NaN);
console.log(a6);*/