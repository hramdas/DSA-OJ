function BSearch(arr, k){
    var l=0; var h = arr.length-1

    while(l<=h){

        mid = Math.floor(l + (h-l)/2)

        if(arr[mid] === k) return 1
        if(arr[mid] > k){
            h = mid-1
        } else l = mid+1
    } 
    return -1
}

function runProgram(input) {
    var input = input.trim().split('\n')
    var cases = input[0].trim().split(' ').map(Number)

    var k = cases[1]
    var arr = input[1].trim().split(' ').map(Number)

    console.log(BSearch(arr, k))

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5 0
    2 -2 0 3 4`);
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
  