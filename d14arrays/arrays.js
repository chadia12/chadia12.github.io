"use strict";

// module.exports ={maxOfThree, sum, multiply, findLongestWord, reverseArrayInPlace, reverseArray, scoreExams, generateArray};

// Question 1
/**
 * 
 * @param {number} num1 -first number.
 * @param {number} num2 -second number.
 * @param {number} num3 -third number.
 * @returns {number} maximum number.
 */
function  maxOfThree(num1, num2, num3){
    let temp;
    if(num1 >= num2 && num1 >= num3){
        temp = num1;
    }
    else if (num2 >= num1 && num2 >= num3){
        temp = num2;
    }
    else{
        temp = num3;
    }
return temp;
}


// Question 2
/**
 * 
 * @param {object} arr -arry of number.
 * @returns {number} sum of elements.
 */
function sum(arr){
   // let result = arr.reduce( (sum, current ) => sum + current, 0);
    let result = 0;
    for (let elements of arr){
        result += elements;
    }
    return result;
}


/**
 * 
 * @param {object} arr -array of elements.
 * @returns {number} multiplication of array.
 */
function multiply(arr){
   // //let result = arr.reduce( (mult, elements ) => mult * elements, 1);
    let result = 1;
    for (let elements of arr){
        result *= elements;
    }
    return result;
}
//Question 3
/**
 * 
 * @param {object} arr - arrays of words.
 * @returns {number} -the longest word;
 */
function findLongestWord(arr){
    // let word =0;
    // for(let value of arr){
    //     if(value.length > word){
    //         word = value.length;
    //     }
       
    // }
   // return word;
    let word ="";
    for(let i =0; i< arr.length; i++){
        if(word.length < arr[i].length){
             word = arr[i];
        }
    }
return word.length;
}


//Question 4
/**
 * 
 * @param {object} arr -arrays of number.
 * @returns {object} - new array with the reverse number
 */
function reverseArray(arr){
    let arr1 =[];
    for(let i = arr.length-1; i >= 0; i--){
        arr1.push(arr[i]);
    }
    return arr1;
}
// console.log(reverseArray( ["A", "B", "C", "D"] ));
/**
 * 
 * @param {object} arr -array of number.
 * @returns {object} -new array with reverse.
 */
function reverseArrayInPlace(arr){
    let newarr =[];
    for(let i = arr.length-1; i>= 0; i--){
          newarr.push(arr[i]);
          
    }
    arr = newarr;
return arr;
}
// console.log(reverseArrayInPlace( ["A", "B", "C", "D"] ));

//QUESTION 5
/**
 * 
 * @param {object} arr -arry.
 * @param {object} arr1 -arry.
 * @returns {object} -new arry of scrore;
 */
function scoreExams(arr, arr1){
    let newarr =[];
    let score = 0;
        for(let elements of arr){
            for(let i = 0; i < arr1.length; i++){
            if( elements[i] === arr1[i]){
                score +=1;
            }

        }
        newarr.push(score);
        score = 0;
    }
    return newarr;
}
//Question 6


/**
 * 
 * @param {number} row -number of row
 * @param {number} col -number of colmun
 * @returns {object} - 2D array.
 */
function generateArray(row, col){
    let arr = [];
    for(let i = 0; i < row ; i++){
        arr[i] =[]
        for(let j =0; j < col ; j++){
            arr[i][j] = (col * i) + (j+1);

        }
    }
    return arr;
}
