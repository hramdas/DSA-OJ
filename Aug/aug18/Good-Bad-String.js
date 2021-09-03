function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim())

    for (let i = 1; i<=N; i++){
      arr= input[i].trim()
      str = []
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== arr[j+1]){
          str.push(arr[j])
        }
      }
        console.log(str.join(''))
    }
    
  }
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    abb
    aaab
    ababa`);
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
  