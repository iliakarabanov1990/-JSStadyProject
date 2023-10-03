const string1 = 'hello';
const string2 = 'Welcome';



const user = {
    family: {
        mather: 'Angela',
        father: 'Ihor',
    },
    sex: 'F',
    age: 33,
};



console.log(calcLet('ilia'));
console.log(calcLet2('ilia'));

function calcLet(str) {

    const resObj = {};

    for (element of str) {
           resObj[element] = (resObj[element]===undefined ? 0 : resObj[element]) + 1;
      };

    return resObj
}

function calcLet2(str) {

    const resObj = {};

    str.split('').forEach(el => resObj[el] = (resObj[el] ===undefined ? 0 : resObj[el]) + 1);

    return resObj;
}

/*const {family : { mather: userMather, father : userFather}} = user;
console.log(userMather);
console.log(userFather);
//const {userFamily: family} = user;

const mName  = user.family?.mather;
const {age, ...otherOserProps} = user;
console.log(age);
console.log(otherOserProps);*/
/*const user2 = {...user, sex: 'M'};


console.log(mather);
console.log(mName);
console.log(age);
console.log(otherOserProps);
console.log(user2);*/



/*const duplicatedSymbols = findDuplicates(string1, string2);
console.log(typeof duplicatedSymbols);
console.log(duplicatedSymbols);

function findDuplicates(string1, string2) {

    return valueToStringLowCase(string1).split('').map(let => valueToStringLowCase(string2).includes(let) ? let : '').join('');//&& !result.includes(let)

}

function valueToStringLowCase(val) {
    return val ? String(val).toLowerCase() : '';
}*/