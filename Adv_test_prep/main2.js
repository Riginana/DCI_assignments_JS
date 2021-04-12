// Task01

const voters =
[
{name:'Bob' , age: 30, voted: true},
{name:'Jake' , age: 32, voted: true},
{name:'Kate' , age: 25, voted: false},
{name:'Sam' , age: 20, voted: false},
{name:'Phil' , age: 21, voted: true},
{name:'Ed' , age:55, voted:true},
{name:'Tami' , age: 54, voted:true},
{name: 'Mary', age: 31, voted: false},
{name: 'Becky', age: 43, voted: false},
{name: 'Joey', age: 41, voted: true},
{name: 'Jeff', age: 30, voted: true},
{name: 'Zack', age: 19, voted: false}
];

function totalVotes(arr) {
    return arr.reduce((acc, curr) => acc + curr.voted, 0)
}

console.log('Losung 1:');
console.log(totalVotes(voters));


// Task02

const arrays = [["1", "2", "3"],[true],[4, 5, 6]];
const array2 = [1, 2, [3, [4, 5]], 6]

function flatten(arr) {
    const result = arr.flat();
    return result.reduce((acc, curr) => acc.concat(curr), []);
}
console.log('Losung 2:');
console.log(flatten(arrays));


// Task03

function voterResults(arr){

    let numYoungVotes = 0;
    let numYoungPeople = 0;
    let numMidVotesPeople = 0;
    let numMidsPeople = 0;
    let numOldVotesPeople = 0;
    let numOldsPeople = 0;

    for (var i = arr.length - 1; i >= 0; i--) {
        if(arr[i].age >= 19 && arr[i].age <= 25 && arr[i].voted === true){
            numYoungVotes++;
        }
        if(arr[i].age >= 19 && arr[i].age <= 25){
            numYoungPeople++;
        }
        if(arr[i].age >= 30 && arr[i].age <= 35 && arr[i].voted === true){
            numMidVotesPeople++;
        }
        if(arr[i].age >= 30 && arr[i].age <= 35 ){
            numMidsPeople++;
        }
        if(arr[i].age >= 40 && arr[i].voted === true){
            numOldVotesPeople++;
        }
        if(arr[i].age >= 40){
            numOldsPeople++;
        }
    }

    return{
        numYoungVotes,
        numYoungPeople,
        numMidVotesPeople,
        numMidsPeople,
        numOldVotesPeople,
        numOldsPeople
    }

}
console.log('Losung 3:');
console.log(voterResults(voters))


// Task04

function byAge(arr) {
   return arr.sort((a, b) => (a.age > b.age) ? 1 : -1);
      
}
console.log('Losung 4:');
console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
])); 


// Task05

const users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {

    return array.reduce((akk, curr) => {
        akk[curr.id] = curr;
        return akk;
    }, {});
}
console.log('Losung 5:');
console.log(groupById(users));

// Task06

const peopleArray = [
    [123, 'dave', 23],
    [456, 'chris', 23],
    [789, 'bob', 23],
    [101, 'tom', 23],
    [102, 'tim', 23],
    ];

function convertArray(obj) {
    return obj.reduce((acc, curr) => {
        acc[curr[0]] = curr[1];
        return acc;
    }, {})
}
console.log('Losung 6:');
console.log(convertArray(peopleArray));

// Task07

const peopleArray2 = [
    { id: 123, name: 'dave', age: 23 },
    { id: 456, name: 'chris', age: 23 },
    { id: 789, name: 'bob', age: 23 },
    { id: 101, name: 'tom', age: 23 },
    { id: 102, name: 'tim', age: 23 },
    ];

function convertArr(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr.id] = curr.name;
        return acc;
    }, {})
}

console.log('Losung 7:');
console.log(convertArr(peopleArray2));

// Task08

const arr1 = [1,2,3,3,3];
const arr2 = [1,4,5,2];

function union(array1, array2) {
    let newArr = array1.concat(array2);
    return result = [...new Set(newArr)]
}
console.log('Losung 8:');
console.log(union(arr1, arr2));


// Task09

const array9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const length = 5;

function chunkArray(arr, size) {
        var results = [];
        while (arr.length) {
          results.push(arr.splice(0, size));
        }
    return results;
};
console.log('Losung 9:');
console.log(chunkArray(array9, length));

// Task010

const data = [
    {name: 'Butters', age: 3, type: 'dog'},
    {name: 'Lizzy', age: 6, type: 'dog'},
    {name: 'Red', age: 1, type: 'cat'},
    {name: 'Joey', age: 3, type: 'dog' }];

function sumYears(arr) {
    const sum = arr.filter(item => item.type === 'dog').reduce((acc, curr) => (acc + curr.age), 0);
    return sum*7;
}
console.log('Losung 10:');
console.log(sumYears(data));

