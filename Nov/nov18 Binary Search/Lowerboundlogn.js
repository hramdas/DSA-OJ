function lBound(arr, k){
  var l=0; var h = arr.length-1
  var ans = -1
  while(l <= h){
    var mid = Math.floor(l + (h-l)/2)

    if(arr[mid] === k ){
      ans  = mid
      h = mid-1
     
    } else if(arr[mid] > k){
      h = mid-1
    } else l = mid+1

  } return ans
    
}

function runProgram(input) {
    var input = input.trim().split('\n')
    var cases = input[0].trim().split(' ').map(Number)
    var k = cases[1]
    let arr = input[1].trim().split(' ').map(Number)

    console.log(lBound(arr, k) )
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`10 7
    0 2 4 4 5 5 7 7 9 10`);
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
  