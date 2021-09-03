function runProgram(input) {
  var input = input.trim().split("\n")
  var N = Number(input[0])
  var num = input[1].trim().split(" ")
  

      odd = 0 
      even = 0
    for (var i = 0; i < N; i++){
        if(num[i]%2 !== 0){
        odd = odd + Number(num[i])
      } else even += Number(num[i])
    }

    //     even = 0
    // for (var i = 0; i < N; i++){
    //     if(num[i]%2==0){
    //         even = even + Number(num[i])
    //     }
    // }

    if (odd>even){
        console.log("Odd")
    } else {
        console.log("Even")
    }

  }
  if (process.env.USERNAME === "hedga") {
    runProgram(`4
    1 2 3 4`);
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
  
  