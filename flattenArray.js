const flatten = (arr) => {
    for(let i= 0; i < arr.length; i++){
        if(typeof arr[i] === 'object'){
            if(arr[i].length === 0){
                console.log('[] found')
                arr.splice(i, 1);
            } else {
                let temp = [];
                for(let j=0; j< arr[i].length; j++){
                    temp.push(arr[i][j]);
                }
                arr.splice(i, 1)
                let arr2 = arr.splice(i)
                arr = arr.concat(temp,arr2)
            }
            
        }
    }
    return(arr)
};
// prints "[1,2,3,4,5,6]"
console.log(flatten([1,2,[3,[4, 5]], 5, 6, []]))
