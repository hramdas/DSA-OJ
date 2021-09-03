function cipher(size, str){
    out = ''
    var a = 0;
    while ( a <size) {
      count = 0;
      j = a;
      for (j = a; j< size; j++) {
        if (str[a] !== str[j]) {
          break;
        } else {
          count++;
        } 
      }
      out += str[j-1]+count
      a = j
    }  
     return out
}

function runProgram(input) {
    input = input.trim().split('\n'); 
    N = Number(input[0].trim())

  line = 1;
  for (var i = 0; i < N; i++){
    size = Number(input[line++].trim());
    str = input[line++].trim();

    console.log(cipher(size, str));   
  } 
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    5
    aabcc
    5
    aazaa`);
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
  