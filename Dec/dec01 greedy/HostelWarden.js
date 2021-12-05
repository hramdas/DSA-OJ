function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var st = input[1].trim().split(' ').map(Number)
    var room = input[2].trim().split(' ').map(Number)
    st = st.sort((a,b)=>a-b)
    room = room.sort((a,b)=>a-b)

    var val = 0;
    for(let i=0 ;i<st.length; i++){
        stval = Math.abs(st[i] - room[i])
        if(val < stval){
            val = stval
        }
    }
    console.log(val)
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    4 -4 2
    4 0 5`);
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
  