function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)
    var num = +input[2].trim()

    out = false
    sum = 0;

   sumExist(arr, 0, num, sum)
   out ? console.log('yes') : console.log('no')

}

function sumExist(arr, l, k, sum){

    if(sum === k){
        out = true;
        return;
    }

    for(var i=l; i<arr.length; i++){
        sumExist(arr, i+1, k, sum)
        sumExist(arr, i+1, k, sum+arr[i])
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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
  