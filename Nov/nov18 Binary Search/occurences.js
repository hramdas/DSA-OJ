function occurance(arr, k){
  var n = arr.length-1;
  //Find 1st matched
  var i = pre(arr, k, 0, n);

  if( i == -1) return i

  var j = post(arr, k, i, n);
  return j-i+1
}

function pre(arr, k, l, h){
  while(h>=l){
    let mid = Math.floor(l + (h-l)/2);

    if((mid == 0 || arr[mid-1] < k) && arr[mid] === k){
      return mid
    } else if( k > arr[mid]) return pre(arr, k, mid+1, h)
    else return pre(arr, k, l, mid-1)
  
  } return -1
}

function post(arr, k, l, h){

  while(h>=l){
    let mid = Math.floor(l + (h-l)/2);

    if((mid == arr.length-1 || arr[mid+1] > k) && arr[mid] === k){
      return mid
    } else if( k < arr[mid]) return post(arr, k, l, mid-1)
    else return post(arr, k, mid+1, h)
    
  } return -1
}

function runProgram(input) {
    var input = input.trim().split('\n')
    var cases = input[0].trim().split(' ').map(Number)
    var k = cases[1]
    let arr = input[1].trim().split(' ').map(Number)

    console.log(occurance(arr, k))
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`10 2
    1 2 2 2 2 2 2 2 3 4`);
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
  