// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.
function remove(names, removedName) {
    for (let i = 0; i < names.length; i++) {
        let idx = names.indexOf(removedName);
        if (i === idx) {
           names.splice(idx, 1);
        }
    }
    return names;
}
// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

function remove(names, removedName) {
    let newNames = [...names]  // copies names array
    for (let i = 0; i < newNames.length; i++) {
        let idx = newNames.indexOf(removedName);
        if (i === idx) {
           newNames.splice(idx, 1);
        }
    }
    return newNames
}

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(nums) {
    return nums.reduce(function (total,num) {
        return total + num
    }, 0)
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(nums) {
    if (nums.length > 0) {
        return sum(nums) / nums.length
    } else {
        return undefined
    }
}

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(nums) {
    if (nums.length !== 0) {
        return Math.min(...nums)
    } else {
         undefined
     } 
}

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

function selectionSort(numbers) {
    let newNumbers = [...numbers]  // copies names array
    for (let i = 0; i < newNumbers.length; i++){
        if (numbers.length > -1) {
            let minNumber = minimum(numbers)
            newNumbers.push(minNumber)
            let numbers = remove(numbers, minNumber)
            return newNumbers 
        } else {
            return null
        }
    }
}
    

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

function textList(names) {
    if (names.length > 0) {
        return document.write(names)
    } else {
        undefined
    }
}
