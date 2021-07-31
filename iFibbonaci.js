// iFibonacci(1) => 1
// iFibonacci(2) => 1
// iFibonacci(3) => 2
// iFibonacci(4) => 3
// iFibonacci(5) => 5
const iFibonacci = (n) => {
    var fibs = [0,1];
    for(let i=0; i < n; i++){
        fibs.push(fibs[0] + fibs[1]);
        fibs.shift();
        console.log(fibs);
    }
    
    return fibs[0];
    
}
console.log(iFibonacci(20));

const rFibbonacci = (n) => {
    if(n < 2){
        return n;
    }
    return rFibbonacci(n-1) + rFibbonacci(n-2)
}
console.log(rFibbonacci(20))