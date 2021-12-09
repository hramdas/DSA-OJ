function envenNUm(arr){
    var sum = 0
    var st = []
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i] %2==0){
            sum++
        }
        st.push(sum)
    }

    res = []
    for(let i=st.length-1; i>=0; i--){
        res.push(st[i])
    }
    console.log(res.join(' '))
    
}

function runProgram(input) {
    arr = input.trim().split('')

    envenNUm(arr)
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`574674546476`);
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
  