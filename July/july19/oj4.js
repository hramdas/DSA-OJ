function runProgram(input) {
    input = input.trim().split("\n")
    test = input[0].trim().split(" ")
    testcase = test[0]
    N = test[1]


    arr = []
    for (var i =1; i<=testcase; i++){
        ar = input[i].trim().split(" ")
        arr.push(ar)
    }  


    sum = 0
    for (var i =0; i<arr.length; i++){
        for (var j =0; j< N; j++){
            if(arr[i][j] % 3 == 0)
            sum += Number(arr[i][j])
        } 
    } console.log(sum)
    
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2 3
    3 1 8
    2 6 0`);
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
  