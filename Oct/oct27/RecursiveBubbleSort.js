function Recursive(arr, n, cur){
  if(n == 1) return

  for(var i=0; i<n-1; i++){

    if(arr[i] > arr[i+1]){

      temp = arr[i]

      arr[i] = arr[i+1]

      arr[i+1] = temp
    }

    Recursive(arr, n-1)
  }
  

}

function runProgram(input) {
    var input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)

    // out = []
    Recursive(arr, n, 0)

    console.log(arr.join(' '))
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    3 5 0 9 8`);
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
  