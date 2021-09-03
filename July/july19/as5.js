arr = [2, 2, 5, 3, 6, 8];


oddCheck = function(el, i){
    if(i%2 !== 0){
    if(el % 2 == 0){
        return false;
    }   else {
        return true;
    }
    }  
}
odds = arr.filter(oddCheck)
console.log(odds)



// arr.forEach(function(el, i){

// })