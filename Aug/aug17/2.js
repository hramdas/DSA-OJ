function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim())
    str = input[2].trim();
    //console.log(str[0]);

    alpha = 'abcdefghijklmnopqrstuvwxyz'

    sum = 0
    for (var i = 0; i < 26; i++){
        for (var j = 0; j <str.length; j++) {
            if (alpha[i] == str[j]){
                sum+= (N+i)
                //console.log(N, i)
            }
        }
    }
    console.log(sum)

   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`30
    3
    abc`);
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
  