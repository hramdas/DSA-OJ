function upperBound(arr, k){
   var l = 0;
   var h = arr.length -1

   while(l<=h){

     mid = Math.floor(l + (h-l)/2)

     if(arr[mid] > k){
       if(arr[mid-1] <= k) return mid
     }

     if(arr[mid] > k){
       h = mid-1
     } else l = mid+1

   } return -1
}


function runProgram(input) {
    var input = input.trim().split('\n')
    var cases = input[0].trim().split(' ').map(Number)
    var k = cases[1]
    let arr = input[1].trim().split(' ').map(Number)

    console.log(upperBound(arr, k))
   
}

if (process.env.USERNAME === "hedga") {
    runProgram(`3 1445
    101 200 1445`);
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
  