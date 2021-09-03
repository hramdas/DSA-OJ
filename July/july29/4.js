function runProgram(input) {
    input = input.trim().split("\n");
    N = Number(input[0]);

    arr = []
    for (var i = 1; i<=N ;i++) {
        arr.push(input[i].trim().split("\n"))
    }
  
    len = []
    for (var i =0; i<N; i++) {
      count = 1
      for (var j = i+1; j <N; j++){
        if (arr[i] == arr[j])
          count++ 
      } len.push(count)
    }

    max = len[0]
    for (var i=1; i <len.length; i++){ 
      if (len[i] > max){
        max = len[i]
      }
    }

    
    for (var i=0; i <len.length; i++){ 
      if (len[i] == max){
        console.log(arr[i].join(""))
        break
      }
    } 
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    HH
    HH
    NTQWPA
    NTQWPA
    HH`);
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
  