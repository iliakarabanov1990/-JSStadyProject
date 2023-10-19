//fumc1(1, 50);
//fumc2([1,3,4,5]);
//console.log(fumc3([1,3,4,5]));
//console.log(fumc3a([1,3,4,5]));
//console.log(fumc3a([]));
//console.log(fumc5([1000,3,4,5,6]));
//console.log(fumc6(1000, 50));
let obj = new Object();
let str = new String();


console.log(String.__proto__);
console.log(String.prototype);
console.log(String.prototype.__proto__);
//console.log(String.prototype.prototype.__proto__);

/*console.log(str);
console.log(str.__proto__);
console.log(str.__proto__.__proto__);

console.log(str.__proto__.__proto__===String.prototype.__proto__);
console.log(str.__proto__===String.prototype);
console.log(str.__proto__.__proto__===String);*/

/*console.log(fumc7(1000, 50));


function fumc1(from, to){

    for(i=from; i<=to; i++){
        console.log(i);
    }
}

function fumc2(arr){

    for(i=0; i< arr.length; i++){
        console.log(arr[i]);
    }
}

function fumc3(arr){

    let mult = 1;
    for(i=0; i< arr.length; i++){
        mult *=arr[i];
    }

    return mult;
}

function fumc3a(arr){
    return arr.reduce((acc, el)=> acc * el);
}

function fumc5(arr){

    return arr.filter(e => e >= 0 && e <= 100 && e%2===0)

}

function fumc6(init, minV){

    let count = 0;

    while(init>=minV){
        init /= 2;
        count++;
    }

    return count;
}

function fumc7(){

    const a = [];
    for(i=0; i<=2023; i++){
        if(i.toString().split('').reduce((acc, e) => acc + Number(e), 0) === 13)
            a.push(i);
    }

    return a;
}*/