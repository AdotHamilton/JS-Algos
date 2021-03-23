function bubbleSort(arr){
    newarr = arr
    for (let i=0; i <newarr.length; i++){
        for (let j = 0; j<newarr.length; j++){
            if (newarr[j] > newarr[j+1]){
                let temp = arr[j];
                newarr[j] = newarr[j+1];
                newarr[j+1] = temp;
            }
        }
    }
    return newarr
}
console.log(bubbleSort([4,8,3,2,5]))

const insertionSort = (arr) => {//loop through array, find value that is less than the one before it, move it
    for (let i=1; i <arr.length; i++){
        let num = arr[i]
        let j = i-1
        while(j>= 0 && arr[j] > num){
            arr[j+1] = arr[j]
            j=j-1
        }
        arr[j+1] = num;
    }
    return arr;
}
console.log(insertionSort([6,4,5,2,8,14,1,3]))


function selectionSort(arr){
    
    for (let i=0; i<arr.length; i++){ //start at index 0, sort and swap with min, then start at index 1....
        let num = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[num]){
                num = j; 
            }
        }
        if (num !== i){
            let temp = arr[i];
            arr[i] = arr[num];
            arr[num] = temp
        }
    }
    return arr;
}
console.log(selectionSort([5,12,34,4,6]))

//partition the array around the value at arr[0]
//without creating a new array
//values left of the original pivot should be less than the pivot
//values right of the pivot should be >= the pivot value
//note: each side of the partitioned value does not
//have to be sorted.
//return the partitioned array
//[5,4,9,2,5,3] -> [4,2,3,5,9,5]
const partition = (arr) => {
    pivot = arr[0]
    pivi = 0
    i = 0
    j = arr.length -1
    lastJ = j
    while (i<= j) {
        while (arr[i] < pivot){
            i++;
        }
        while (arr[j] >= pivot){
            j--;
        }
        lastJ = j
        
        if(arr[i]>arr[j]) {
            if(arr[i] === pivot){
                pivi = j;
            }
            if(arr[j] === pivot){
                pivi = i;
            }
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    temp = arr[lastJ];
    arr[lastJ] = arr[pivi];
    arr[pivi] = temp;
    return arr
}
console.log(partition([5,4,9,2,5,3]));
//should return [4,2,3,5,9,5]

function partitionSort(array) {
    if(array.length < 2) {
      return array;
    }
  
    var pivot = array[0];
    var lesserArray = [];
    var greaterArray = [];
  
    for (var i = 1; i < array.length; i++) {
      if ( array[i] > pivot ) {
        greaterArray.push(array[i]);
      } else {
        lesserArray.push(array[i]);
      }
    }
  
    return partitionSort(lesserArray).concat(pivot, partitionSort(greaterArray));
}
console.log(partitionSort([5,4,9,2,5,3]))

const rotateStr = (str, num) => {
    str2 = ''
    //take num characters off the end and push to front
    for(let i=(str.length-num); i < str.length; i++){
        char = str[i];
        str2 += char;
    }
    for(let i=0; i< (str.length-num); i++){
        char = str[i];
        str2 += char
    }
    console.log(str[28]);
    return str2;
    
}
console.log(rotateStr('did i shine my shoes today?', 9))

function isPalendrome(str){
    for(let i=0;i <Math.trunc(str.length/2); i++){ //indexing first half of array, comparing it with values at the end.
        if(str[i] === str[str.length - 1 -i]){
        }
        else {
            return false
        }
    }
    return true
}
console.log(isPalendrome("racecar"))

function dollarAndCoinChange(cents){
    var change = {
        "tens": 0,
        "fives": 0,
        "ones": 0,
        "quarters": 0,
        "dimes": 0,
        "nickels": 0,
        "pennies": 0
    }
    while (cents > 0){
        if(cents >= 1000){
            cents -= 1000
            change.tens += 1
        }
        else if(cents >= 500){
            cents -= 500
            change.fives += 1
        }
        else if(cents >= 100){
            cents -= 100
            change.ones += 1
        }
        else if(cents >= 25){
            cents -= 25
            change.quarters += 1
        }
        else if(cents < 10){
            cents -= 10
            change.dimes += 1
        }
        else if(cents < 5){
            cents -= 5
            change["nickles"] += 1
        }
        else if(cents < 1){
            cents -= 1
            change["pennies"] += 1
        }
    }
    return change;
}
console.log(dollarAndCoinChange(4632))


