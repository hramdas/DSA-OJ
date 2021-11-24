function BSearch(arr, k, n){

        let i = low(arr, 0, n, k)
        if(i == -1) return [i, j, j-i+1];
        let j = high(arr, i, n, k)
    
        return [i, j, j-i+1]
}

function low(arr, l, h, k){
    while(h>=l){
        let mid = Math.floor(l + (h-l)/2)
        if((mid === 0 || arr[mid-1]) !== k && arr[mid] === k ) {
            return mid
        } else if (k > arr[mid]) return low(arr, mid+1, h, k)
        else return low(arr, l, mid-1, k)
    }
    return -1
}

function high(arr, l, h, k){
   
    if( l >=h) return h;

    // console.log('l', l, h)
    while(h>=l){
        let mid = Math.floor(l + (h-l)/2)
        if(mid === arr.length-1 && arr[mid] === k) return mid
      
        if((mid === arr.length-1 || arr[mid+1]) !== k && arr[mid] === k ) {
            return mid
        } else if (k < arr[mid]){
            console.log('mid', mid)
            return high(arr, l, mid-1, k) 
        } return high(arr, mid+1, h, k)
    }
    return -1
}


function runProgram(input) {
    var input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)
    var k = +input[2].trim()

    console.log(BSearch(arr, k, n-1).join(' '))
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    1 2 3 4 5
    5
    Ex`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
}
  