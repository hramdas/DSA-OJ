function SumExist(arr, k,sum, cur){
    if(sum==k){
        out = true
    }
    if(cur == arr.length){
        return
    }

    for(var i= cur; i<arr.length; i++){
        SumExist(arr, k,sum, i+1)
        SumExist(arr, k,sum+arr[i], i+1)
    }
}

function runProgram(input) {
    input = input.trim().split('\n')
    n = +input[0].trim()
    arr = input[1].trim().split(' ').map(Number)
    k = +input[2].trim()

    sum=0
    out = false;
    SumExist(arr, k,sum, 0)
   // console.log(out)
    // if (out==true){
    //     console.log('yes')
    // }

    out ? console.log('yes') : console.log('no') 
   
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
  