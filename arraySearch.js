// Matrix Search

// Jenny digs image and wants to make a JavaScript imaging library like PIL for python. She is given 2 different two-dimensional arrays, containing integers between 0 and 65535. Each two dimensional array represents a grey-scale image, where each integer value is a pixel. The second image might be somewhere inside the larger one. Return whether it is.
// Given Array: [ [12, 34, 45, 56],
//                [98, 87, 76, 65],                   
//                [56, 67, 78, 89],
//                [54, 43, 32, 21] ];
    // And Array: 
    // [ [67, 78],[43, 32] ]; 
function matrixSearch(arr, img) {

    for(let i=0; i< img.length; i++){
        for(let j=0; j<img[i].length; j++){
            if(img[i][j] == arr[0][0] && img[i][j+1] == arr[0][1]){
                if(img[i+1][j] == arr[1][0] && img[i+1][j+1] == arr[1][1]){
                    return ('found at index: ' + i +', '+ j);
                }
            } 
        }
    }
    return false;
}
console.log(matrixSearch([ [36, 67],[54, 43] ],
    [[12, 34, 45, 56],
    [98, 87, 76, 65],                   
    [56, 67, 78, 89],
    [54, 43, 32, 21] 
]));