function Minimum(arr, n){
    var l = 0;
    var h = n - 1;
    var mid = Math.floor(l + (h-l)/2)

    while(l <= h){
        var mid = Math.floor(l + (h-l)/2)
        if(arr[mid] < arr[arr.length-1] && arr[mid-1] > arr[mid]){
          return  arr[mid]
        } 
        if(arr[mid] < arr[arr.length-1]){
          h= mid-1
        } else l = mid+1
    } return arr[0]
    
}

function runProgram(input) {
    var input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)
    console.log(Minimum(arr, n))
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`10
    4 6 7 9 10 -1 0 1 2 3
    `);
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
  