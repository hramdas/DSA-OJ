function runProgram(input) {
    str = input.trim().split(' ').join('')

    obj={}

    for (let i=0; i<str.length; i++){
        if(obj[str[i]] == obj[str[i]]) {
            obj[str[i]] +=1
        } else  obj[str[i]] = 1
    }
    // console.log(obj)

    console.log(Object.keys(obj).join(''))
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`my name is ankush`);
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
  