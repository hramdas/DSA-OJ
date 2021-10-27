function subSequence(str,curr, sub){
  if(sub.length>0){
    console.log(sub)
  }
  if(curr == str.length) return;

  for(var i=curr; i<str.length; i++){
    sub += str[i]
    subSequence(str,i+1, sub)

    sub = sub.split('')
    sub.pop()
    sub = sub.join('')
  }
  
}

function runProgram(input) {
    input = input.trim().split('\n')
    str = input[1].trim()
    n = +input[0].trim()

    sub = ''

    subSequence(str, 0, sub)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4
    abcd`);
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
  