function runProgram(input) {
    input = input.trim().split("\n");
    N = Number(input[0]);
    str = input[1].trim();
    //console.log(N,str)

    alpha = "abcdefghijklmnopqrstuvwxyz"
    

    sort = []
    for (var i=0; i<26; i++) {
        count = 0
        for (var j=0; j<N; j++) {
            if (alpha[i] == str[j]) {
                count++
            } 
        } if (count>0) {
            sort.push(alpha[i] + "-" + count)}
    } console.log(sort.join("\n"))

   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4
    aman`);
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
  