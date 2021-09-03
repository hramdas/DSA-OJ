function runProgram(input) {
    input = input.trim().split("\n");
    N = Number(input[0]);
    arr = input[1].trim().split(" ");

    out = [];
    for (var i = 0; i < N; i++){
      len = 1
        for (var j = i+1; j < N;j++){
           if (arr[i] == arr[j])
           len++
        }
        out.push(len)
    } 

    max = out[0]
    for (var i = 1; i <out.length; i++){
      if(out[i] > max){
        max = out[i]
      }
    } 

    for (var i = 0; i <out.length; i++){
      if (max == out[i]){
        console.log(arr[i])
       break
      }
    }
     
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    1 2 0 2 9`);
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
  