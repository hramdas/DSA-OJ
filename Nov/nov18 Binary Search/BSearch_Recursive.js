function BSearch(arr, k, l, h){

    if(l > h) return -1

    if(h>=l){
        mid = Math.floor(l + (h-1)/2)
    }

    if(arr[mid] === k) return 1
    if(arr[mid] > k) return BSearch(arr, k, l, mid-1)
    if(arr[mid] < k) return BSearch(arr, k, mid+1, h)
    return -1
}

function runProgram(input) {
    var input = input.trim().split('\n')
    var cases = input[0].trim().split(' ').map(Number)

    var k = cases[1]
    var arr = input[1].trim().split(' ').map(Number)

    var l=0;
    var h= arr.length-1

    console.log(BSearch(arr, k, l, h))
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5 2
    8 4 1 9 11`);
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
  