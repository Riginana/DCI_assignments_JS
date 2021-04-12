1.  **Task:** Turn an array of voter objects into a count of how many people voted. For that create a function _totalVotes_ that takes an array as argument  
    **Concept:** Einzelne values von Objekten, verschachtelt in einem Array, mithilfe von reduce zu manipulieren  
    **Input:**

    ```
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
    ```

    **Output:** 7

2.  **Task:** Given an array of arrays, flatten them into a single array. For that create a function _flatten_ that takes an array as argument  
    **Concept:** Manipulation of deep nested arrays  
    **Input:**

    ```
    const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
    ];

    const array2 = [
    1, 2, [3, [4, 5]], 6
    ]
    ```

    **Output:** ["1", "2", "3", true, 4, 5, 6] // [1, 2, 3, 4, 5, 6];

3.  **Task:** Given an array of potential voters, return an object representing the results of the vote. (19-25 is young, 30-35 is mid, from 40 onwards is old) For that create a function _voterResults_ that takes an array as argument  
    **Concept:** Using reduce with nested objects in an array  
    **Input:**

    ```
    const voters = [
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

    ```

    **Output:** {
    numYoungVotes: 1,
    numYoungPeople: 4,
    numMidVotesPeople: 3,
    numMidsPeople: 4,
    numOldVotesPeople: 3,
    numOldsPeople: 4
    };

4.  **Task:** Sort the objects in the array by age. For that create a function _byAge_ that takes an array as argument  
    **Concept:** Array Manipulation  
    **Input:**

    ```
    byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
    ]);
    ```

    **Output:**

    ```
    [
        { name: 'Misunderstood Observer', age: 2 },
        { name: 'Quiet Samurai', age: 22 },
        { name: 'Unlucky Swami', age: 77 },
        { name: 'Arrogant Ambassador', age: 100 }
    ]
    ```

5.  **Task:** Create a function _groupById_ with an array as an argument that creates an object from it, with id as the key, and array items as values.  
    **Concept:** Using reduce to convert an array into an object  
    **Input:**

    ```
    const users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
    ];
    ```

    **Output:**

    ```
    {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
    }
    ```

6.  **Task:** Convert a nested array to an object with the key/values as shown below  
    **Concept:** Converting arrays/objects  
    **Input:**

    ```
    const peopleArray = [
    [123, 'dave', 23],
    [456, 'chris', 23],
    [789, 'bob', 23],
    [101, 'tom', 23],
    [102, 'tim', 23],
    ];
    ```

    **Output:**

    ```
    {
    '101': 'tom',
    '102': 'tim',
    '123': 'dave',
    '456': 'chris',
    '789': 'bob'
    }
    ```

7.  **Task:** Convert a nested object in an array to an object with the key/values as shown below  
    **Concept:** Converting arrays/objects  
    **Input:**

    ```
    const peopleArray2 = [
    { id: 123, name: 'dave', age: 23 },
    { id: 456, name: 'chris', age: 23 },
    { id: 789, name: 'bob', age: 23 },
    { id: 101, name: 'tom', age: 23 },
    { id: 102, name: 'tim', age: 23 },
    ];
    ```

    **Output:**

    ```
    {
    '101': 'tom',
    '102': 'tim',
    '123': 'dave',
    '456': 'chris',
    '789': 'bob'
    }
    ```

8.  **Task:** Given two or more arrays, write a function _union_ that combines their elements into one array without any repetition.  
    **Concept:** Array Manipulation  
    **Input:**

    ```
    const arr1 = [1,2,3,3,3];
    const arr2 = [1,4,5,2];
    ```

    **Output:** [1,2,3,4,5]

9.  **Task:** Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. Write a function _chunkArray_ with an array and a number (length) as arguments.  
    **Concept:** Array Manipulation  
    **Input:**

    ```
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const length = 5;
    ```

    **Output:** [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

10. **Task:** The goal is to sum all of the dogs ages in dog years.  
    **Concept:** Combining the methods filter, map and reduce in one function  
    **Input:**

    ```
    const data = [
    {
    name: 'Butters',
    age: 3,
    type: 'dog'
    },
    {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
    },
    {
    name: 'Red',
    age: 1,
    type: 'cat'
    },
    {
    name: 'Joey',
    age: 3,
    type: 'dog'
    },
    ];
    ```

    **Output:** 84


    ```
